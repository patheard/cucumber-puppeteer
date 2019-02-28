const checkContainsText = require('../../features/support/check/checkContainsText');
const checkUrl = require('../../features/support/check/checkUrl');
const clickElement = require('../../features/support/action/clickElement');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/clickElement.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();  
});
afterAll(async () => {
  await browserScope.close();
});

describe('clickElement', () => {

  it('clicks an existing element to trigger javascript', async () => {
    await openUrl.call(browserScope, testUrl);
    await clickElement.call(browserScope, '.javascript');
    await checkContainsText.call(browserScope, '.inc', null, '1');
  }, testTimeout);

  it('clicks a link element to update page hash', async () => {
    await clickElement.call(browserScope, 'a.hash');
  }, testTimeout);  

  it('clicks a link element to cause a page navigation', async () => {
    await clickElement.call(browserScope, 'a.nav');
    await checkUrl.call(browserScope, null, 'http://localhost:8080/checkAttribute.html');
  }, testTimeout);

  it('clicks a submit button to submit a form', async () => {
    await openUrl.call(browserScope, testUrl);
    await clickElement.call(browserScope, '[type="submit"]');
    await checkUrl.call(browserScope, null, 'http://localhost:8080/checkContainsText.html?listenhere=meow');
  }, testTimeout);    

  it('fails if the element does not exist', async () => {
    await expect(clickElement.call(browserScope, '.bueller')).rejects.toThrow('Error: failed to find element matching selector ".bueller"');
  }, testTimeout);  

}); 