var gulp     = require("gulp"),
    gutil    = require("gulp-util"),
    glob     = require("glob"),
    fs       = require("fs"),
    _        = require("lodash"),
    path     = require("path"),
    Mustache = require("mustache");

var baseTemplateFn = require(path.join(process.cwd(), "src/base-template-data.js")),
    compilerFn     = require(path.join(process.cwd(), "src/compiler.js"));

var themeName;
var log = gutil.log;

var defaultConfig = {
  // colors: path.join(process.cwd(), "src/themes/colors/*.js"),
  colors: path.join(process.cwd(), "src/themes/colors/*.js"),
  themes: path.join(process.cwd(), "src/themes/*.js"),
  // themes: path.join(process.cwd(), "src/themes/*.js"),
  mustache: {
    src: path.join(process.cwd(), "src/itg.flat.mustache"),
    dest: process.cwd()
  }
};

var compiler = {

  themes: function() {
    return glob.sync(defaultConfig.themes);
  },

  colorFileName: function(filepath) {
    return path.basename(filepath, '.js');
  },

  composeName: function(filepath) {
    var colorName = ('.' + this.colorFileName(filepath))
      .replace('.base', '');

    return 'itg.flat.' +
           themeName +
           colorName +
           '.sublime-theme';
  },

  exec: function(config, cb) {
    if (cb) { log = function(){}; }
    defaultConfig = _.merge(defaultConfig, config);
    var file = path.join(process.cwd(), "src/compiler.js");

    compiler.themes().forEach(function(file) {
      log("Generating: ");

      themeName = path.basename(file, '.js');
      var theme = require(file);
      glob.sync(defaultConfig.colors).forEach(function(f, t) {
        var colors = require(f);
        var templateData = compilerFn(baseTemplateFn, theme, colors);
        var newName = compiler.composeName(f);

        log("  " + newName);

        var template = fs.readFileSync(defaultConfig.mustache.src, {encoding: 'utf-8'});
        var stream = fs.createWriteStream(newName);
        stream.once('open', function(fd) {
          stream.write(Mustache.render(template, templateData));
          stream.end();
        });
      });
    });

    if (cb) { cb(); }
  }
};

gulp.task('compile', compiler.exec);
gulp.task('default', ['compile']);

module.exports = compiler;
