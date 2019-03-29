const assert = require('assert').strict;

/**
 * Checks the web page `<title>` content.
 * @param {String} expectedTitle Expected title to check if the web page contains.
 * @param {String} not String "not" to indicate that the element should not have the given text.
 */
module.exports = async function (expectedTitle, not) {
    
    const titleValue = await this.page.title();
    const containsTitle =  titleValue && expectedTitle && titleValue.includes(expectedTitle);
    const shouldContainExpectedTitle = not ? false : true;

    assert.strictEqual(containsTitle, shouldContainExpectedTitle, `Expected "${titleValue}" to ${shouldContainExpectedTitle ? 'contain' : 'not contain'} "${expectedTitle}"`);
}