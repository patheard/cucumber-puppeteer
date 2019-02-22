const { assert } = require('chai');

/**
 * Checks if an element contains the given text.
 * @param {String} selector CSS selector of the element to check for the given text.
 * @param {String} not String "not" to indicate that the element should not have the given text.
 * @param {String} expectedText Text to check if the given element contains.
 */
module.exports = async function (selector, not, expectedText) {
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const elementText = await this.page.$eval(selector, el => el ? el.textContent : null);
    const containsText = elementText && elementText.includes(expectedText);

    if(not){
        assert(!containsText, `Expected "${selector}" to not contain "${expectedText}"`);  
    } else {
        assert(containsText, `Expected "${selector}" to contain "${expectedText}"`);
    }   


}