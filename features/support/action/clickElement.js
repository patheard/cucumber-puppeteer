/**
 * Clicks on an item.  Uses the DOM click() method since Puppeteer `page.click(selector)` behaves
 * inconsistently.
 * @param {String} selector CSS selector of the item to click.
 * @param {String} waitForSelector If not null, the selector that should exist after the click.
 * test should allow to complete.
 */
module.exports = async function(selector, waitForSelector) {
    // Wait until the given selector exists
    if(waitForSelector){
        /* istanbul ignore next */
        await Promise.all([
            this.page.waitForSelector(waitForSelector),
            this.page.$eval(selector, e => e.click())
        ]);

    // Nothing to wait for, just click
    } else {
        /* istanbul ignore next */
        await this.page.$eval(selector, e => e.click());
    }
};