const assert = require('assert').strict;

/**
 * Scrolls the element on which it's called into the visible area of the browser window.
 * @param {String} selector The selector of the element to scroll to.
 */
module.exports = async function(selector) {

    let prob = null;

    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    try {
        
        //Scroll desire element into view
        await this.page.$eval(selector, el => el.scrollIntoView());

        //Wait  a second 
        await this.page.waitFor(1000);

    } catch (error) {
        prob = error;
    }

    assert(prob === null, `Error: failed to scroll to element matching selector "${selector}"`);
};