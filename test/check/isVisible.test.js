const isVisible = require('../../features/support/check/isVisible');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/isVisible.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('isVisible', () => {

  it('finds visible elements', async () => {    
    await isVisible.call(browserScope, '.visible');
  }, testTimeout);

  it('does not find hidden elements', async () => {
    await expect(isVisible.call(browserScope, '.hidden')).rejects.toThrow('Expected ".hidden" to be visible');
  }, testTimeout);  

  it('finds hidden elements when told to look for them', async () => {
    await isVisible.call(browserScope, '.hidden', 'not');
  }, testTimeout); 

  it('does not finds elements that are visible if told they should be hidden', async () => {
    await expect(isVisible.call(browserScope, '.visible', 'not')).rejects.toThrow('Expected ".visible" to be hidden');
  }, testTimeout);   

  it('does not find elements that do not exist on the page', async () => {
    await expect(isVisible.call(browserScope, '.bueller')).rejects.toThrow('Expected ".bueller" to be visible');
  }, testTimeout); 

}); 