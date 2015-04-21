var app      = require('../Gulpfile.js'),
    fs       = require('fs'),
    path     = require('path'),
    gulp     = require('gulp');

require.extensions['.sublime-theme'] = require.extensions['.json'];
var expect = require("chai").expect;
var tmpDir = path.join(process.cwd() + '/test/tmp/');

describe('Compile', function() {
  before(function(done) {
    var config = {
      mustache: { dest: tmpDir }
    };

    app.exec(config, done);
  });

  it('should generate valid files', function(done) {
    fs.readdir(tmpDir, function(err, files) {
      files.forEach(function(file) {
        require(tmpDir + file);
      });

      done();
    });
  });

});
