var app      = require('../Gulpfile.js'),
    async    = require('async'),
    glob     = require('glob'),
    path     = require('path'),
    _        = require('lodash'),
    gulp     = require('gulp');


require.extensions['.sublime-theme'] = require.extensions['.json'];
var expect       = require("chai").expect,
    tmpDir       = path.join(process.cwd() + '/test/tmp/'),
    templatesDir = path.join(process.cwd() + '/test/templates/'),
    srcDir       = path.join(process.cwd() + '/src/');

describe('Compile', function() {
  describe('should generate valid JSON', function() {
    before(function(done) {
      var config = { mustache: { dest: tmpDir } };
      app.exec(config, done);
    });

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
  var colorsFn = require(srcDir + 'compiler.js');
      base     = require(srcDir + 'base-template-data.js'),
      theme    = require(srcDir + 'themes/' + dir + '.js'),
      template = require(templatesDir + dir + '.js'),
      merged   = colorsFn(base, theme);

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

describe('I know how to merge', function() {

  var templateData = function(colors) {
  return {
      foo: colors.red,
      bar: 'foo'
    };
  };

  var defaultColors = {
    red: 'blue',
    primaryColor: 'blue'
  };

  var newColors = {
    primaryColor: 'green'
  };

  it('compare', function(done) {
    var compared = _.merge(templateData(defaultColors), defaultColors, newColors);
    console.log(compared);

    // expect().to.deep.equal(data.merged);
    done();
  });

});
