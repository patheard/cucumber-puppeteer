const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
});
afterAll(async () => {
  await browserScope.close();
});

describe('openUrl', () => {

  it('opens a valid URL', async () => {    
    const response = await openUrl.call(browserScope, 'http://localhost:8080/checkTitle.html');
    expect(browserScope.page).not.toBe(null);
    expect(response.status()).toBe(200);
    expect(response.url()).toBe('http://localhost:8080/checkTitle.html');
  }, testTimeout);

  it('does not open an invalid url', async () => {
    const response = await openUrl.call(browserScope, 'http://localhost:8080/does-not-exist.html');
    expect(browserScope.page).not.toBe(null);
    expect(response.status()).toBe(404);
    expect(response.url()).toBe('http://localhost:8080/does-not-exist.html');    
  }, testTimeout);  

}); 