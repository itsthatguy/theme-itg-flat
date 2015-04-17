var gulp     = require("gulp"),
    path     = require("path"),
    tap      = require("gulp-tap"),
    rename   = require("gulp-rename"),
    mustache = require("gulp-mustache");

var config = {
  colors: {
    src: [
      "./src/colors/**/*.js",
      "!./src/colors/colors.js"
    ],
    fn: "./src/colors/colors.js"
  },
  mustache: {
    src: "./src/itg.flat.mustache",
    dest: "./"
  }
};

function lastItem(array) {
  return array[array.length-1];
}

function baseData(filepath) {
  var dirpath = path.dirname(filepath);
  if (colorFileName(dirpath) === 'colors') return {};
  return require(path.join(dirpath, 'base.js'));
}

function colorData(filepath) {
  return require(filepath) || {};
}

function parentDir(filepath) {
  var dirpath = path.dirname(filepath);
  return lastItem(dirpath.split(path.sep));
}

function colorFileName(filepath) {
  return path.basename(filepath, '.js');
}

function composeName(filepath) {
  var colorName = ('.' + colorFileName(filepath))
    .replace('.base', '');

  return 'itg.flat.' +
         parentDir(filepath) +
         colorName +
         '.sublime-theme';
}

gulp.task('compile', function() {
  console.log("Generating: ");
  return gulp.src(config.colors.src)
  .pipe(tap(function(file,t) {
    var base = baseData(file.path);
    var data = colorData(file.path);
    var newName = composeName(file.path);
    var colors = require(config.colors.fn)(base, data || {});

    console.log("  " + newName);

    gulp.src(config.mustache.src)
    .pipe(mustache(colors))
    .pipe(rename(newName))
    .pipe(gulp.dest(config.mustache.dest));
  }));

});

gulp.task('default', ['compile']);
