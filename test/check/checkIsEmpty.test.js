const checkIsEmpty = require('../../features/support/check/checkIsEmpty');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkIsEmpty.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkIsEmpty', () => {

  it('finds empty elements', async () => {    
    await checkIsEmpty.call(browserScope, '.empty');
    await checkIsEmpty.call(browserScope, 'ul li:last-child');
  });

  it('finds not empty elements', async () => {    
    await checkIsEmpty.call(browserScope, '.not-empty', 'not');
    await checkIsEmpty.call(browserScope, 'ul', 'not');
    await checkIsEmpty.call(browserScope, 'ul li:first-child', 'not');
  });

  it('throws an error when the element is not empty, but should be', async () => {
    await expect(checkIsEmpty.call(browserScope, '.not-empty')).rejects.toThrow('Expected ".not-empty" to be empty');
  });

  it('throws an error when the element is empty, but should not be', async () => {
    await expect(checkIsEmpty.call(browserScope, '.empty', 'not')).rejects.toThrow('Expected ".empty" to not be empty');
  });     

  it('throws an error when the element does not exist', async () => {
    await expect(checkIsEmpty.call(browserScope, '.foobar')).rejects.toThrow('Error: failed to find element matching selector ".foobar"');
  }); 

}); 