const checkTitle = require('../../features/support/check/checkTitle');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkTitle.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkTitle', () => {

  it('identifies matching titles', async () => {    
    await checkTitle.call(browserScope, 'checkTitle - Test');
  });

  it('throws an error when the titles do not match', async () => {
    await expect(checkTitle.call(browserScope, 'You`re a wizard Harry')).rejects.toThrow('Expected "checkTitle - Test" to equal "You`re a wizard Harry"');
  });  

}); 