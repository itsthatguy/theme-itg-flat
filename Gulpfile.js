var gulp     = require("gulp"),
    gutil    = require("gulp-util"),
    glob     = require("glob"),
    del      = require("del"),
    async    = require('async'),
    fs       = require("fs"),
    _        = require("lodash"),
    path     = require("path"),
    Mustache = require("mustache"),
    argv     = require('yargs')
    .help('h')
    .alias('h', 'help')
    .option('t', {
        alias : 'test',
        describe: 'Run gulp in the test environment',
        type: 'boolean'
    }).argv;

var baseTemplateFn = require(path.join(process.cwd(), "src/base-template-data.js")),
    compilerFn     = require(path.join(process.cwd(), "src/compiler.js"));

var log = gutil.log;

if (argv.test) {
  var outputDir = path.join(process.cwd() + '/test/tmp/');
  // Prevent gulp from outputting messages while running in test
  var gutil = require('gulp-util');
  gutil.log = gutil.noop;
  gutil.log = function() { return this; };
}


var config = {
  colorFiles: path.join(process.cwd(), "src/themes/colors/*.js"),
  themeFiles: path.join(process.cwd(), "src/themes/*.js"),
  mustache: {
    src: path.join(process.cwd(), "src/itg.flat.mustache"),
    dest: outputDir || process.cwd()
  }
};

var compiler = {

  themes: function() {
    return glob.sync(config.themeFiles);
  },

  colors: function() {
    return glob.sync(config.colorFiles);
  },

  colorFileName: function(filepath) {
    return path.basename(filepath, '.js');
  },

  composeName: function(filepath, themeName) {
    var themeName = this.colorFileName(themeName);
    var colorName = ('.' + this.colorFileName(filepath))
      .replace('.base', '');

    return ('itg.flat.' +
           themeName +
           colorName +
           '.sublime-theme').replace('.undefined', '');
  },

  buildTheme: function(file, themeName, next) {

    var colors = require(file),
        theme  = require(themeName || file),
        templateData = compilerFn(baseTemplateFn, theme, (colors.defaultColors || colors)),
        newName = compiler.composeName(file, themeName),
        fileDest = path.join(config.mustache.dest, newName);

    log("  " + newName);

    var template = fs.readFileSync(config.mustache.src, {encoding: 'utf-8'});
    var stream = fs.createWriteStream(fileDest);
    stream.once('open', function(fd) {
      stream.write(Mustache.render(template, templateData));
      stream.end();
    });
    stream.on('close', function() {
      if (next) next();
    });
  },

  exec: function(done) {

    if (argv.test) { log = function(){}; }

    log("Generating: ");

    async.each(compiler.themes(), function(theme, next) {

      // build base theme
      compiler.buildTheme(theme, undefined, function() {

        // build theme color variations
        async.each(compiler.colors(), function(file, next) {
          compiler.buildTheme(file, theme, next);
        }, next);
      });
    }, done);

  }
};

gulp.task('compile', ['clean'], compiler.exec);
gulp.task('clean', function(done) {
  del(path.join(config.mustache.dest, '*.sublime-theme'), done)
});
gulp.task('default', ['compile']);

module.exports = compiler;
