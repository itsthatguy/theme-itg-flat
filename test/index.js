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
    srcDir       = path.join(process.cwd() + '/src/'),
    files;

async.each([1], function(item, done) {
  var config = { mustache: { dest: tmpDir } };
  app.exec(config, function() {
    files = glob.sync(tmpDir + '**/*.sublime-theme');
    done();
  });
}, buildTests);

function buildTests() {
  describe('Compile', function() {
    describe('should generate valid JSON', function() {
      console.log(files);

      async.each(files, function(file, callback) {
        it(path.basename(file), function(done) {
          expect(require(file)).to.be.ok;
          callback();
          done();
        });
      });

    });
  });
}

var compareMerge = function(dir) {
  var colorsFn = require(srcDir + 'compiler.js'),
      baseFn   = require(srcDir + 'base-template-data.js'),
      theme    = require(srcDir + 'themes/' + dir + '.js'),
      merged   = colorsFn(baseFn, theme, theme.defaultColors),
      template = require(templatesDir + dir + '.js');

  return {template: template, merged: merged};
};

describe('/src/theme/ files', function() {
  describe('merges base data as expected', function() {
    it('from /dark.js', function(done) {
      var data = compareMerge('dark');
      console.log(data.template.primaryColor);
      console.log(data.merged.primaryColor);
      expect(data.template).to.deep.equal(data.merged);
      done();
    });

    it('from /light.js', function(done) {
      var data = compareMerge('light');
      expect(data.template).to.deep.equal(data.merged);
      done();
    });
  });
});

describe('_.merge() works as expected', function() {

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

  var template = { foo: 'blue', bar: 'foo', red: 'blue', primaryColor: 'green' };

  it('compare', function(done) {
    var compared = _.merge(templateData(defaultColors), defaultColors, newColors);

    expect(compared).to.deep.equal(template);
    done();
  });

});
