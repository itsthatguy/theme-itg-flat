var _ = require('lodash');

describe('Sanity check', function() {

  var templateData = function(colors) {
    return {foo: colors.red, bar: 'foo'};
  };
  var defaultColors = {red: 'blue', primaryColor: 'blue'};
  var newColors = {primaryColor: 'green'};

  it('_.merge() works like i think it works', function(done) {
    var compared = _.merge(templateData(defaultColors), defaultColors, newColors),
        truth    = {foo: 'blue', bar: 'foo', red: 'blue', primaryColor: 'green'};

    expect(compared).to.eql(truth)
    done();
  });

});
