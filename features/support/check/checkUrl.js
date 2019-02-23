const { assert } = require('chai');

/**
 * Checks if a page's URL matches the expected value
 * @param {String} not The string "not" to indicate the URL should not match the expected.
 * @param {String} expectedUrl The expected URL 
 */
module.exports = async function(not, expectedUrl) {
  const url = await this.page.url();
  assert(url !== null, 'Page URL cannot be null');

  if(not){
    assert(url !== expectedUrl, `Expected "${expectedUrl}" to not equal "${url}"`);
  } else {
    assert(url === expectedUrl, `Expected "${expectedUrl}" to equal "${url}"`);
  }
}