// Dependencies
const { expect } = require('chai')

/**
 * Open a URL in a web page.
 * @param {String} url The URL to open in a new page object.
 */
const openUrl = async function(url) {
  this.page = await this.browser.newPage();
  await this.page.goto(url);
  await this.page.waitForNavigation();
};

/**
 * Checks if the web page `<title>` matches the given string.
 * @param {String} title Expected title of the web page.
 */
const checkTitle = async function(title) {
  expect(title).to.equal(await this.page.title());
}

/**
 * Determine if an element is visible.
 * @param {String} selector CSS selector of the element.
 * @param {String} falseCase The string "not" when checking for a hidden element.
 */
const isVisible = async function(selector, falseCase) {
  const options = falseCase ? {hidden: true} : {visible: true};
  await this.page.waitForSelector(selector, options);
};

module.exports = {
  checkTitle,
  openUrl,
  isVisible,
};
