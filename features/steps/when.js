const { When } = require('cucumber');
const clickElement = require('../support/action/clickElement');
const openUrl = require('../support/action/openUrl');

When(
    /^I open the url "([^"]*)?"$/, 
    openUrl
);

When(
    /^I click the (?:element|button|link) "([^"]*)?"$/, 
    clickElement
);