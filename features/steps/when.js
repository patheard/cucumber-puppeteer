const { When } = require('cucumber');
const clickElement = require('../support/action/clickElement');
const openUrl = require('../support/action/openUrl');
const setElementValue = require('../support/action/setElementValue');
const waitFor = require('../support/action/waitFor');
const deleteCookie = require('../support/action/deleteCookie');
const resizeScreenSize = require('../support/action/resizeScreenSize')

When(
    /^I open the url "([^"]*)?"$/, 
    openUrl
);

When(
    /^I click the (?:element|button|link) "([^"]*)?"$/, 
    clickElement
);

When(
    /^I set the (?:element|input|select|textarea) "([^"]*)?" value to "([^"]*)?"$/, 
    setElementValue
);

When(
    /^I wait for "([^"]*)?" seconds$/, 
    waitFor
);

When(
    /^I delete the cookie "([^"]*)?"$/, 
    deleteCookie
);

When(
    /^I set the browser size to (\d+) pixels width and (\d+) pixels height$/,
    resizeScreenSize
);