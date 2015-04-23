_ = require('lodash');

module.exports = function(baseTemplateData, theme, variationColors) {
  var output, template, baseTemplate;
  var combinedColors = _.merge(theme.defaultColors, (variationColors || {}));
  combinedColors = _.omit(combinedColors, 'defaultColors');

  template = theme.templateData;
  if (typeof template === 'function') {
    template = template(combinedColors);
  } else {
    template = combinedColors;
  }

  baseTemplate = baseTemplateData(combinedColors);
  output = _.merge(baseTemplate, template, combinedColors);

  return output;
};
