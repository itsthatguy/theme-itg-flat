var app      = require('../Gulpfile.js'),
    async    = require('async'),
    glob     = require('glob'),
    path     = require('path'),
    gulp     = require('gulp');


require.extensions['.sublime-theme'] = require.extensions['.json'];
var expect = require("chai").expect;
var tmpDir = path.join(process.cwd() + '/test/tmp/');
var templatesDir = path.join(process.cwd() + '/test/templates/');
var srcDir = path.join(process.cwd() + '/src/');

describe('Compile', function() {
  before(function(done) {
    var config = { mustache: { dest: tmpDir } };
    app.exec(config, done);
  });

  describe('should generate valid JSON', function() {
    var files = glob.sync(tmpDir + '**/*.sublime-theme');

    async.each(files, function(file) {
      it(path.basename(file), function(done) {
        require(file);
        done();
      });
    });

  });
});

var compareMerge = function(dir) {
  var colorsFn = require(srcDir + 'colors/template-data.js');
      base     = require(srcDir + 'colors/' + dir + '/base.js'),
      merged   = colorsFn(base, {}),
      template = require(templatesDir + dir + '.js');

  return {merged: merged, template: template};

};

describe('/src files', function() {
  describe('merges base data as expected', function() {
    it('from /dark/*', function(done) {
      var data = compareMerge('dark');
      expect(data.template).to.deep.equal(data.merged);
      done();
    });

    it('from /light/*', function(done) {
      var data = compareMerge('light');
      expect(data.template).to.deep.equal(data.merged);
      done();
    });
  });
});
