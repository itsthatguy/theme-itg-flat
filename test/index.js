require.extensions['.sublime-theme'] = require.extensions['.json'];

global.expect       = require("chai").expect;
global.run          = require('run-command');
global.glob         = require('glob');
global.path         = require('path');

global.run.set('info', false);

global.tmpDir       = path.join(process.cwd() + '/test/tmp/'),
global.templatesDir = path.join(process.cwd() + '/test/templates/'),
global.srcDir       = path.join(process.cwd() + '/src/');

var fs = require('fs')

fs.exists(tmpDir, function(exists) {
  if (exists) { return; }
  fs.mkdirSync(tmpDir);
});
