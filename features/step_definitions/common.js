// Dependencies
const { Given, When, Then } = require('cucumber');
const {
  visitHomepage,
  pending,
  clickOnItem,
  takenToPage,
  fillInFormField,
  pressButton,
  shouldBeOnPage,
  shouldSeeText,
  shouldNotSeeText,
  hoverOverItem,
  reloadPage,
  wait
} = require('../support/actions');

Given('I am on the homepage', visitHomepage);

Given('I click on {string}', clickOnItem);

When('I am taken to the {string} page', takenToPage);

When('I fill in {string} with {string}', fillInFormField);

When('I press {string}', pressButton);

Then('I should be on the {string} page', shouldBeOnPage);

Given('pending', pending);

Then('I should see {string}', shouldSeeText);

Then('I should not see {string}', shouldNotSeeText);

When('I hover over {string}', hoverOverItem);

Then('I reload the page', reloadPage);

Then('I wait for {int} seconds', { timeout: 60 * 1000 }, wait);
