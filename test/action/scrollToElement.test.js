const checkContainsText = require('../../features/support/check/checkContainsText');
const scrollToElement = require('../../features/support/action/scrollToElement');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/scrollToElement.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('setElementValue', () => {

    it('scroll to a given element', async () => {
        await scrollToElement.call(browserScope, '#second');
        await checkContainsText.call(browserScope, '#second-clue', null, 'In View');
        await checkContainsText.call(browserScope, '#first-clue', null, 'Out of View');
        await checkContainsText.call(browserScope, '#third-clue', null, 'Out of View');

        await scrollToElement.call(browserScope, '#third');
        await checkContainsText.call(browserScope, '#third-clue', null, 'In View');
        await checkContainsText.call(browserScope, '#first-clue', null, 'Out of View');

        await scrollToElement.call(browserScope, '#fourth');
        await checkContainsText.call(browserScope, '#fourth-clue', null, 'In View');
        await checkContainsText.call(browserScope, '#second-clue', null, 'Out of View');
    });
   
    it('does not find elements that do not exist on the page', async () => {
        await expect(scrollToElement.call(browserScope, '.foobar')).rejects.toThrow('Error: failed to scroll to element matching selector ".foobar"');
        await expect(scrollToElement.call(browserScope, null)).rejects.toThrow('Error: failed to scroll to element matching selector "null"');
        await expect(scrollToElement.call(browserScope, undefined)).rejects.toThrow('Error: failed to scroll to element matching selector "undefined"');
        await expect(scrollToElement.call(browserScope, 23)).rejects.toThrow('Error: failed to scroll to element matching selector "23"');
    });

}); 