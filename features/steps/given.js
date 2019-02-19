const { Given } = require('cucumber');
const { openUrl } = require('../support/actions');

Given('I open the url {string}', openUrl);