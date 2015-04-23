describe('Mustache', function() {

  before(function(done) {
    run('./node_modules/.bin/gulp --silence compile --test', function() {
      files = glob.sync(tmpDir + '**/*.sublime-theme');
      done();
    });
  });

  describe('generates the expected', function() {
    it('itg.flat.dark.sublime-theme', function(done) {
      var template = require(templatesDir + 'itg.flat.dark.template.sublime-theme'),
          theme    = require(tmpDir + 'itg.flat.dark.sublime-theme');
      expect(template).to.deep.equal(theme);
      done();
    });

    it('itg.flat.light.sublime-theme', function(done) {
      var template = require(templatesDir + 'itg.flat.light.template.sublime-theme'),
          theme    = require(tmpDir + 'itg.flat.light.sublime-theme');
      expect(template).to.deep.equal(theme);
      done();
    });
  });
});
