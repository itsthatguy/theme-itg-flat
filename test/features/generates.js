describe("Generates", function() {
  var files;

  before(function(done) {
    run('./node_modules/.bin/gulp --silence compile --test', function() {
      files = glob.sync(tmpDir + '**/*.sublime-theme');
      done();
    });
  });

  it('has more than 2 sublime-theme files', function(done) {
    expect(files.length).to.be.above(2);
    done();
  });

  describe("has valid json", function() {

    it('itg.flat.dark.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.sublime-theme'));
      done();
    });

    it('itg.flat.dark.aqua.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.aqua.sublime-theme'));
      done();
    });

    it('itg.flat.dark.blue.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.blue.sublime-theme'));
      done();
    });

    it('itg.flat.dark.green.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.green.sublime-theme'));
      done();
    });

    it('itg.flat.dark.orange.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.orange.sublime-theme'));
      done();
    });

    it('itg.flat.dark.yellow.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.dark.yellow.sublime-theme'));
      done();
    });

    it('itg.flat.light.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.sublime-theme'));
      done();
    });

    it('itg.flat.light.aqua.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.aqua.sublime-theme'));
      done();
    });

    it('itg.flat.light.blue.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.blue.sublime-theme'));
      done();
    });

    it('itg.flat.light.green.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.green.sublime-theme'));
      done();
    });

    it('itg.flat.light.orange.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.orange.sublime-theme'));
      done();
    });

    it('itg.flat.light.yellow.sublime-theme', function(done) {
      expect(require(tmpDir + 'itg.flat.light.yellow.sublime-theme'));
      done();
    });

  });
});
