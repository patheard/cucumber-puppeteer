const { When } = require('cucumber');
const clickElement = require('../support/action/clickElement');
const deleteCookie = require('../support/action/deleteCookie');
const keyboardPress = require('../support/action/keyboardPress');
const openUrl = require('../support/action/openUrl');
const resizeScreenSize = require('../support/action/resizeScreenSize')
const setElementValue = require('../support/action/setElementValue');
const setUserAgent = require('../support/action/setUserAgent');
const scrollToElement = require('../support/action/scrollToElement');
const waitFor = require('../support/action/waitFor');

When(
    'I open the url {string-env}', async function(url) {
        await openUrl.call(this, url, null); 
    }    
);

When(
    'I open the url {string-env} with user agent {string}', async function(url, userAgent) {
        await openUrl.call(this, url, userAgent); 
    } 
);

When(
    'I click the element/button/link {string}', async function(selector) {
        await clickElement.call(this, selector,  null); 
    }
);

When(
    'I click the element/button/link {string} and wait for the element {string}', async function(selector, waitForSelector) {
        await clickElement.call(this, selector,  waitForSelector); 
    }
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

When (
    'I press the {string} key', 
    keyboardPress
)