const { expect } = require('chai');

/**
 * Checks if the web page `<title>` matches the given string.
 * @param {String} title Expected title of the web page.
 */
module.exports = async function(title) {
  expect(title).to.equal(await this.page.title());
}