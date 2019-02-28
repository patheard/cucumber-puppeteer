/**
 * Clicks on an item.
 * @param {String} selector CSS selector of the item to click.* 
 */
module.exports = async function(selector) {
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const doesClickCauseNavigation = await this.page.$eval(selector, el => { return el.tagName.toLowerCase() === 'a' || el.getAttribute('type') === 'submit'; });

    // Element causes a navigation that we need to wait for (link click, form submit)
    if(doesClickCauseNavigation){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: 'domcontentloaded'}),
            this.page.click(selector)
        ]);

    // Element does not cause a navigation event
    } else {               
        await this.page.click(selector);
    }
};