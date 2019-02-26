const assert = require('assert').strict;

/**
 * Checks if a given element is an active element in the DOM.  Fails if the element does not exist.
 * @param {String} selector CSS selector of the element to check for child elements.
 * @param {String} not The string "not" to negate the check (the element should not have child elements).
 */
module.exports = async function(selector, not) {
  const childFocus = await this.page.$(selector);
  const shouldBeFocus = not ? false : true;
  if(childFocus !== null){
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const result = await this.page.evaluate(childFocus => childFocus === document.activeElement, childFocus);
    assert.strictEqual(result, shouldBeFocus, `Expected "${selector}" to ${shouldBeFocus ? 'have focus' : 'have no focus'}`);
  }else {
    assert(undefined, `Error: failed to find element matching selector "${selector}"`);
  }
  
}