const BrowserScope = require('../../features/support/scope/BrowserScope');

let browserScope;

describe('BrowserScope', () => {

  it('starts out uninitialized', async () => {    
    browserScope = new BrowserScope();
    expect(browserScope.page).toBe(null);
    expect(browserScope.browser).toBe(null);
    expect(browserScope.config).toBe(null);
    expect(browserScope.worldParameters).toEqual({});
  });

  it('can be initialized', async () => {
    browserScope = new BrowserScope({parameters: {headless: true}});
    await browserScope.init();    
    expect(browserScope.page).not.toBe(null);
    expect(browserScope.config).not.toBe(null);
    expect(browserScope.browser).not.toBe(null);
    expect(browserScope.worldParameters).toEqual({headless: true});

    const browserVersion = await browserScope.browser.version();
    expect(browserVersion).toContain('Chrome');
  });
  
  it('can be closed', async () => {    
    await browserScope.close();
    expect(browserScope.page).toBe(null);
    expect(browserScope.browser).toBe(null);
    expect(browserScope.config).toBe(null);
  });

}); 