const checkElementEnabled = require('../../features/support/check/checkElementEnabled');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkElementEnabled.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkElementEnabled', () => {

  it('identifies enabled elements', async () => {    
    await checkElementEnabled.call(browserScope, '.enabled');
  });

  it('identifies disabled elements', async () => {    
    await checkElementEnabled.call(browserScope, '.disabled', 'not');
  });  

  it('throws an error if the element is enabled, but should be disabled', async () => {
    await expect(checkElementEnabled.call(browserScope, '.enabled', 'not')).rejects.toThrow('Expected ".enabled" to be disabled');
  });

  it('throws an error if the element is disabled, but should be enabled', async () => {
    await expect(checkElementEnabled.call(browserScope, '.disabled')).rejects.toThrow('Expected ".disabled" to be enabled');
  }); 

  it('throws an error if the element does not exist', async () => {
    await expect(checkElementEnabled.call(browserScope, '.foobar')).rejects.toThrow('Error: failed to find element matching selector ".foobar"');
  });

  it('throws an error if the element cannot be enabled/disabled', async () => {
    await expect(checkElementEnabled.call(browserScope, 'h1')).rejects.toThrow('Error: element "h1" cannot be enabled or disabled');
  });  

}); 