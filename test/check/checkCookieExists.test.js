const checkCookieExists = require('../../features/support/check/checkCookieExists');
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

describe('checkCookieExists', () => {

    it('finds cookies that exist', async () => {    
      await checkCookieExists.call(browserScope, 'existing-cookie');
      await checkCookieExists.call(browserScope, 'undefined-value-cookie');
      await checkCookieExists.call(browserScope, 'second-existing-cookie');
    }, testTimeout);

    it('can identify when an cookie does not exist', async () => {    
      await checkCookieExists.call(browserScope, 'not-existing-cookie', 'not');
    }, testTimeout);

    it('throws an error when the cookie should exist, but does not', async () => {    
      await expect(checkCookieExists.call(browserScope, 'not-existing-cookie')).rejects.toThrow('Expected "not-existing-cookie" to exist');
    }, testTimeout);

    it('throws an error when the cookie exists, but should not', async () => {
      await expect(checkCookieExists.call(browserScope, 'existing-cookie', 'not')).rejects.toThrow('Expected "existing-cookie" to not exist');
    }, testTimeout); 
         
}); 