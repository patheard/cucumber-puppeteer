const { assert } = require('chai');

/**
 * Determine if an element is visible.
 * @param {String} selector CSS selector of the element.
 * @param {String} not Null when checking for visible, otherwise checking for hidden.
 */
module.exports = async function(selector, not) {
    let error = null;
    const visibilityProp = not ? 'hidden' : 'visible';
    const options = {timeout: 1000};
    options[visibilityProp] = true;

    try {
        await this.page.waitForSelector(selector, options);
    } catch(e){
        error = e;
    }

    assert(error === null, `Expected "${selector}" to be ${visibilityProp}`);
};
