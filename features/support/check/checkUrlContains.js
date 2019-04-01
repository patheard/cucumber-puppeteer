const assert = require('assert').strict;

/**
 * Checks if expected url is contaned in the web page url.
 * @param {String} expectedUrl Expected url to check if the web page contains.
 * @param {String} not The string "not" to indicate the URL should not match the expected.
 */
module.exports = async function(expectedUrl,not) {

  const url = await this.page.url();
  const containsUrl = url && expectedUrl && url.includes(expectedUrl);
  const shouldUrlContain = not ? false : true;

  assert.strictEqual(containsUrl, shouldUrlContain, `Expected "${url}" to ${shouldUrlContain ? 'contain' : 'not contain'} "${expectedUrl}"`);
}