const clickElement = require('../../features/support/action/clickElement');
const checkHasFocus = require('../../features/support/check/checkHasFocus');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkHasFocus.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkHasFocus', () => {

  it('finds elements that has focus', async () => {    
    await checkHasFocus.call(browserScope, '#focus');
  });

  it('find elements without focus', async () => {
    await checkHasFocus.call(browserScope, '#no-focus', 'not');
  });
  
  it('throws an error if the element has focus, but should not', async() => {
    await expect(checkHasFocus.call(browserScope, '#focus', 'not')).rejects.toThrow('Expected "#focus" to have no focus');
  });

  it('throws an error if the element has no focus, but should have', async() => {
    await expect(checkHasFocus.call(browserScope, '#no-focus')).rejects.toThrow('Expected "#no-focus" to have focus');
  });

  it("finds newly focused elements", async () =>{
    await clickElement.call(browserScope, '#tobe-focused');
    await checkHasFocus.call(browserScope, '#tobe-focused');
    await checkHasFocus.call(browserScope, '#focus', 'not');
    await checkHasFocus.call(browserScope, '#no-focus', 'not');
});   

  it('throws an error when the element doest exist', async() => {
    await expect(checkHasFocus.call(browserScope, '.foobar')).rejects.toThrow(`Error: failed to find element matching selector ".foobar`);
  });

}); 