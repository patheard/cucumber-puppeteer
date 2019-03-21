const checkCookieExists = require('../../features/support/check/checkCookieExists');
const deleteCookie = require('../../features/support/action/deleteCookie');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/deleteCookie.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('deleteCookie', () => {

  it('delete an existing cookie', async () => {
    await checkCookieExists.call(browserScope, 'existing-cookie');
    await deleteCookie.call(browserScope, 'existing-cookie');
    await checkCookieExists.call(browserScope, 'existing-cookie', 'not');
  });


  it('fails if the cookie does not exist', async () => {
    await checkCookieExists.call(browserScope, 'tobe-deleted-cookie', 'not');  
    await expect(deleteCookie.call(browserScope, 'tobe-deleted-cookie')).rejects.toThrow(`Error: unable to find 'tobe-deleted-cookie'.`);
    await expect(deleteCookie.call(browserScope)).rejects.toThrow(`Error: unable to find 'undefined'.`);
  });

});