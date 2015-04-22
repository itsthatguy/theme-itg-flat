_ = require('lodash');

module.exports = function(baseTemplateData, theme, variationColors) {
  var output, template, baseTemplate;
  var combinedColors = _.merge(theme.defaultColors, variationColors);
  
  template = (theme.templateData || function(){})(combinedColors) || {};
  baseTemplate = baseTemplateData(combinedColors); 
  output = _.merge(baseTemplate, template, combinedColors);

  return output;
};
