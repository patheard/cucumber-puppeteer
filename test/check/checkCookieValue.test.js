const checkCookieValue = require('../../features/support/check/checkCookieValue');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkCookieExists.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkCookieValue', () => {

    it('finds cookies with matching value', async () => {    
        await checkCookieValue.call(browserScope, 'existing-cookie', 'Cookie with a value');
        await checkCookieValue.call(browserScope, 'undefined-value-cookie', 'undefined');
        await checkCookieValue.call(browserScope, 'second-existing-cookie', 'Cookie with a new value');
    }, testTimeout);

    it('does not find cookies without a matching value', async () => {    
      await checkCookieValue.call(browserScope, 'existing-cookie', 'some value', 'not');
      await checkCookieValue.call(browserScope, 'undefined-value-cookie', 'defined', 'not');
      await checkCookieValue.call(browserScope, 'second-existing-cookie', 'Cookie with a value', 'not');
    }, testTimeout);

    it('fails if the value matches but should not', async () => {    
      await expect(checkCookieValue.call(browserScope, 'existing-cookie', 'Cookie with a value', 'not')).rejects.toThrow('Expected "existing-cookie" to not have a value of "Cookie with a value"');
    }, testTimeout);

    it('fails if the value does not match but should', async () => {    
      await expect(checkCookieValue.call(browserScope, 'existing-cookie', 'some rando value')).rejects.toThrow('Expected "existing-cookie" to have a value of "some rando value"');
    }, testTimeout);    
  
    it('does not find value of cookies that do not exist on the page', async () => {
      await expect(checkCookieValue.call(browserScope, 'not-existing-cookie')).rejects.toThrow("Error: failed the cookie 'not-existing-cookie' does not exist");
    }, testTimeout); 
     
}); 