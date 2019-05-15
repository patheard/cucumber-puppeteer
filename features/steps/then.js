const { Then } = require('cucumber');
const checkAccessibility = require('../support/check/checkAccessibility');
const checkAttribute = require('../support/check/checkAttribute');
const checkContainsText = require('../support/check/checkContainsText');
const checkElementEnabled = require('../support/check/checkElementEnabled');
const checkElementExists = require('../support/check/checkElementExists');
const checkElementVisible = require('../support/check/checkElementVisible');
const checkElementValue = require('../support/check/checkElementValue');
const checkIsEmpty = require('../support/check/checkIsEmpty');
const checkTitle = require('../support/check/checkTitle');
const checkUrl = require('../support/check/checkUrl');
const checkHasFocus = require("../support/check/checkHasFocus");
const checkIsChecked = require('../support/check/checkIsChecked');
const checkCookieExists = require("../support/check/checkCookieExists");
const checkCookieValue = require("../support/check/checkCookieValue");
const resizeScreenSize = require("../support/action/resizeScreenSize");
const checkTitleContains = require("../support/check/checkTitleContains");
const checkUrlContains = require("../support/check/checkUrlContains");
const checkScreenshot = require("../support/check/checkScreenshot");


Then(
    /^I expect that the title is "([^"]*)"$/, 
    checkTitle
);

Then(
    /^I expect the element "([^"]*)" is( not)? visible$/, async function(selector, not){
        await checkElementVisible.call(this, selector, not); 
    }    
);

Then(
    /^I expect the element "([^"]*)" is( not)? visible after "([^"]*)" seconds$/, async function(selector, not, seconds){
        await checkElementVisible.call(this, selector, not, seconds); 
    }    
);

Then(
    /^I expect the element "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkElementValue
);

Then(
    /^I expect the element "([^"]*)"( does not)? contains? text "([^"]*)"$/, 
    checkContainsText
);

Then(
    /^I expect the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

Then(
    /^I expect the attribute "([^"]*)?" from element "([^"]*)?" is( not)? "([^"]*)?"$/,
    checkAttribute
);

Then(
    /^I expect the element "([^"]*)?" is( not)? on the page$/,
    checkElementExists
);

Then(
    /^I expect the element "([^"]*)?" is( not)? empty$/,
    checkIsEmpty
);

Then(
    /^I expect the element "([^"]*)?" is( not)? enabled$/,
    checkElementEnabled
);

Then(
    /^I expect the element "([^"]*)?" has( no)* focus$/,
    checkHasFocus
);

Then(
    /^I expect the element "([^"]*)?" is( not)? checked$/,
    checkIsChecked
);

Then(
    /^I expect the cookie "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkCookieValue
);

Then(
    /^I expect the cookie "([^"]*)?"( not)? exist?$/,
    checkCookieExists
);

Then(
    /^I resize the browser to (\d+) pixels width and (\d+) pixels height$/,
    resizeScreenSize
);

Then(
    /^I expect the page title (does not )?contains? "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect the page url (does not )?contains? "([^"]*)?"$/,
    checkUrlContains
);

Then(
    /^I expect the screenshot of "([^"]*)?" matches the web page?$/, async function(filename){
        await checkScreenshot.call(this, filename); 
    }    
);

Then(
    'I expect the {string} page has no accessibility errors',
    checkAccessibility   
);