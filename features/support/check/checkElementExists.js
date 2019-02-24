const { assert } = require('chai');

/**
 * Checks if an element does, or does not, exist on the page.
 * @param {String} selector CSS selector of the element to check for.
 * @param {String} not The string "not" to negate the check (element should not exist).
 */
module.exports = async function(selector, not) {
  const elem = await this.page.$(selector);

  if(not){
    assert(elem === null,  `Expected "${selector}" to not exist`);
  } else {
    assert(elem !== null,  `Expected "${selector}" to exist`);
  }
}