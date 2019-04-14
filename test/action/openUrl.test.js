const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  browserScope.config.rootUrl = 'http://localhost:8080';
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
  });

  it('opens a valid URL with a config rootUrl', async () => {
    const response = await openUrl.call(browserScope, '/checkAttribute.html');
    expect(browserScope.page).not.toBe(null);
    expect(response.status()).toBe(200);
    expect(response.url()).toBe('http://localhost:8080/checkAttribute.html'); 
  });  

  it('does not open an invalid url', async () => {
    const response = await openUrl.call(browserScope, 'http://localhost:8080/does-not-exist.html');
    expect(browserScope.page).not.toBe(null);
    expect(response.status()).toBe(404);
    expect(response.url()).toBe('http://localhost:8080/does-not-exist.html');    
  });  

}); 