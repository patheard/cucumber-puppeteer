const { Then } = require('cucumber');
const checkContainsText = require('../support/check/checkContainsText');
const checkAttribute = require('../support/check/checkAttribute');
const checkTitle = require('../support/check/checkTitle');
const checkUrl = require('../support/check/checkUrl');
const isVisible = require('../support/check/isVisible');

Then(
    /^I expect that the title is "([^"]*)"$/, 
    checkTitle
);

Then(
    /^I expect the element "([^"]*)" is( not)? visible$/, 
    isVisible
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
    /^I expect the attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkAttribute
);