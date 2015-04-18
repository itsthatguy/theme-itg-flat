var app = require('../Gulpfile.js'),
    path = require('path'),
    gulp = require('gulp');

var expect = require("chai").expect;

describe('Compile', function() {
  it('should generate files', function(done) {
    var config = {
      mustache: {
        dest: path.join(process.cwd() + '/test/tmp/')
      }
    };
    app.exec(config, done);
  });
});
