const { Given } = require('cucumber');
const checkAttribute = require('../support/check/checkAttribute');
const checkContainsText = require('../support/check/checkContainsText');
const checkElementEnabled = require('../support/check/checkElementEnabled');
const checkElementExists = require('../support/check/checkElementExists');
const checkElementVisible = require('../support/check/checkElementVisible');
const checkIsEmpty = require('../support/check/checkIsEmpty');
const checkUrl = require('../support/check/checkUrl');


Given(
    /^the element "([^"]*)?" is( not)* visible$/,
    checkElementVisible
);

Given(
    /^the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkAttribute
);

Given(
    /^the element "([^"]*)"( does not)? contains? text "([^"]*)"$/, 
    checkContainsText
);

Given(
    /^element "([^"]*)?" is( not)* on the page$/,
    checkElementExists
);

Given(
    /^the element "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    checkElementEnabled
);

/*
Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);
*/



