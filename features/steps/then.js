const { Then } = require('cucumber');
const checkTitle = require('../support/check/checkTitle');
const isVisible = require('../support/check/isVisible');

Then(
    /^I expect that the title is "([^"]*)"$/, 
    checkTitle
);

Then(
    /^I expect the element "([^"]*)" is( not)? visible$/, 
    isVisible
);