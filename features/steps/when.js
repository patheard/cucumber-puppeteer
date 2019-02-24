const { When } = require('cucumber');
const openUrl = require('../support/action/openUrl');

When(
    /^I open the url "([^"]*)?"$/, 
    openUrl
);

/*
Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);


Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

*/



