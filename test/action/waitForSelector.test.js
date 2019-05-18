const checkElementExists = require('../../features/support/check/checkElementExists');
const waitForSelector = require('../../features/support/action/waitForSelector');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/waitForSelector.html';
const browserScope = new BrowserScope();

beforeAll(async () => {  
  await browserScope.init();  
});
afterAll(async () => {
  await browserScope.close();
});

describe('waitForSelector', () => {

  it('waits a default timeout for an element', async () => {
    await openUrl.call(browserScope, testUrl);  
    await waitForSelector.call(browserScope, '.delayed');
    await checkElementExists.call(browserScope, '.delayed');
  });

  it('waits a specified decimal period of time for an element', async () => {
    await openUrl.call(browserScope, testUrl);  
    await waitForSelector.call(browserScope, '.delayed', 10);
    await checkElementExists.call(browserScope, '.delayed');
  });   

}); 