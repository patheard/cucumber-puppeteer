const checkElementExists = require('../../features/support/check/checkElementExists');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkElementExists.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkElementExists', () => {

  it('finds elements that exist', async () => {    
    await checkElementExists.call(browserScope, 'h1');
  }, testTimeout);

  it('can identify when an element does not exist', async () => {    
    await checkElementExists.call(browserScope, '.foobar', 'not');
  }, testTimeout);  

  it('throws an error when the element should exist, but does not', async () => {
    await expect(checkElementExists.call(browserScope, '.foobar')).rejects.toThrow('Expected ".foobar" to exist');
  }, testTimeout);  

  it('throws an error when the element exists, but should not', async () => {
    await expect(checkElementExists.call(browserScope, 'h1', 'not')).rejects.toThrow('Expected "h1" to not exist');
  }, testTimeout);    

}); 