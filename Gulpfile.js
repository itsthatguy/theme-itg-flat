var gulp     = require("gulp"),
    gutil    = require("gulp-util"),
    _        = require("lodash"),
    path     = require("path"),
    tap      = require("gulp-tap"),
    rename   = require("gulp-rename"),
    mustache = require("gulp-mustache");

var defaultConfig = {
    colors: {
      src: [
        path.join(process.cwd(), "src/colors/**/*.js"),
        "!" + path.join(process.cwd(), "src/colors/colors.js")
      ],
      fn: path.join(process.cwd(), "src/colors/colors.js")
    },
    mustache: {
      src: path.join(process.cwd(), "src/itg.flat.mustache"),
      dest: process.cwd()
    }
  };

var compiler = {

  baseData: function(filepath) {
    var dirpath = path.dirname(filepath);
    if (this.colorFileName(dirpath) === 'colors') return {};
    return require(path.join(dirpath, 'base.js'));
  },

  colorData: function(filepath) {
    return require(filepath);
  },

  parentDir: function(filepath) {
    var dirpath = path.dirname(filepath);
    return _.last(dirpath.split(path.sep));
  },

  colorFileName: function(filepath) {
    return path.basename(filepath, '.js');
  },

  composeName: function(filepath) {
    var colorName = ('.' + this.colorFileName(filepath))
      .replace('.base', '');

    return 'itg.flat.' +
           this.parentDir(filepath) +
           colorName +
           '.sublime-theme';
  },

  exec: function(config, cb) {
    var log = gutil.log
    if (cb) { log = function(){}; }
    config = _.merge(defaultConfig, config);

    log("Generating: ");
    return gulp.src(config.colors.src)
    .pipe(tap(function(file, t) {
      var base = compiler.baseData(file.path);
      var data = compiler.colorData(file.path);
      var newName = compiler.composeName(file.path);
      var colors = require(config.colors.fn)(base, data || {});

      log("  " + newName);

      gulp.src(config.mustache.src)
      .pipe(mustache(colors))
      .pipe(rename(newName))
      .pipe(gulp.dest(config.mustache.dest));
    })
    .on('end', function() {
      if (cb) { cb(); }
    }));
  }

};

gulp.task('compile', compiler.exec);
gulp.task('default', ['compile']);

module.exports = compiler;
