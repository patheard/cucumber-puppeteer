const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;

let browserScope;

afterAll(async () => {
    await browserScope.close();
});

describe('BrowserScope', () => {

  it('starts out uninitialized', async () => {    
    browserScope = new BrowserScope();
    expect(browserScope.page).toBe(null);
    expect(browserScope.browser).toBe(null);
  }, testTimeout);

  it('can be initialized', async () => {
    browserScope = new BrowserScope();
    await browserScope.init();    
    expect(browserScope.page).toBe(null);
    expect(browserScope.browser).not.toBe(null);

    const browserVersion = await browserScope.browser.version();
    expect(browserVersion).toContain('Chrome');
  }, testTimeout);
  
  it('can be closed', async () => {    
    await browserScope.close();
    expect(browserScope.page).toBe(null);
    expect(browserScope.browser).toBe(null);
  }, testTimeout);

}); 