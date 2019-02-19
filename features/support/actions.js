// Dependencies
const { expect } = require('chai')

const openUrl = async function(url) {
  this.page = await this.browser.newPage();
  await this.page.goto(url);
  await this.page.waitForNavigation();
};

const checkTitle = async function(title) {
  expect(title).to.equal(await this.page.title());
}

const isVisible = async function(selector) {
  await this.page.waitForSelector(selector, {
    visible: true
  });
};

module.exports = {
  checkTitle,
  openUrl,
  isVisible,
};
