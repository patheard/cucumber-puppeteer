const { assert } = require('chai');

/**
 * Determine if an element is visible.
 * @param {String} selector CSS selector of the element.
 * @param {String} falseCase The string "not" when checking for a hidden element.
 */
module.exports = async function(selector, falseCase) {
    let error = null;
    const visibilityProp = falseCase ? 'hidden' : 'visible';
    const options = {timeout: 1000};
    options[visibilityProp] = true;

    try {
        await this.page.waitForSelector(selector, options);
    } catch(e){
        error = e;
    }

    assert(error === null, `Expected "${selector}" to be ${visibilityProp}`);
};
