const { When } = require('cucumber');
const clickElement = require('../support/action/clickElement');
const openUrl = require('../support/action/openUrl');
const setElementValue = require('../support/action/setElementValue');
const waitFor = require('../support/action/waitFor');
const deleteCookie = require('../support/action/deleteCookie');
const resizeScreenSize = require('../support/action/resizeScreenSize')
const scrollToElement = require('../support/action/scrollToElement');
const setUserAgent = require('../support/action/setUserAgent');

When(
    'I open the url {string-env}', 
    openUrl
);

When(
    // Used RegEx since cucumber expressions do not have a good way to do optional capturing groups that return their value
    /^I click the (?:element|button|link) "([^"]*)?"( and wait for the page to load)?$/, 
    clickElement
);

When(
    'I set the element/input/select/textarea {string} value to {string-env}', 
    setElementValue
);

When(
    'I wait for {float} second(s)', 
    waitFor
);

When(
    'I wait for {int} second(s)', 
    waitFor
);

When(
    'I delete the cookie {string-env}', 
    deleteCookie
);

When(
    'I set the browser viewport to {int}px width by {int}px height',
    resizeScreenSize
);

When(
    'I scroll to the element {string}', 
    scrollToElement
);

When(
    'I set the user agent to {string}', 
    setUserAgent
);