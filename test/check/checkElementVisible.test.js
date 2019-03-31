const checkElementVisible = require('../../features/support/check/checkElementVisible');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkElementVisible.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkElementVisible', () => {

  it('finds visible elements', async () => {    
    await checkElementVisible.call(browserScope, '.visible');
    await checkElementVisible.call(browserScope, '.visible', null, '2');
  });

  it('does not find hidden elements', async () => {
    await expect(checkElementVisible.call(browserScope, '.hidden')).rejects.toThrow('Expected ".hidden" to be visible');
  });  

  it('finds hidden elements when told to look for them', async () => {
    await checkElementVisible.call(browserScope, '.hidden', 'not');
    await checkElementVisible.call(browserScope, '.hidden', 'not', '1.5');
  }); 

  it('does not finds elements that are visible if told they should be hidden', async () => {
    await expect(checkElementVisible.call(browserScope, '.visible', 'not')).rejects.toThrow('Expected ".visible" to be hidden');
  });   

  it('does not find elements that do not exist on the page', async () => {
    await expect(checkElementVisible.call(browserScope, '.bueller')).rejects.toThrow('Expected ".bueller" to be visible');
  }); 

}); 