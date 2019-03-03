const checkElementValue = require('../../features/support/check/checkElementValue');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkElementValue.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkElementValue', () => {

  it('identifies input elements with a matching value', async () => {    
    await checkElementValue.call(browserScope, '#input-value', null, 'input with a value');
    await checkElementValue.call(browserScope, '#input-no-value', null, '');
  }, testTimeout);

  it('identifies input elements without a matching value', async () => {    
    await checkElementValue.call(browserScope, '#input-no-value', 'not', 'some value');
  }, testTimeout);
  
  it('identifies textarea elements with a matching value', async () => {    
    await checkElementValue.call(browserScope, '#textarea-value', null, 'textarea with a value');
    await checkElementValue.call(browserScope, '#textarea-no-value', null, '');
  }, testTimeout);

  it('identifies textarea elements without a matching value', async () => {    
    await checkElementValue.call(browserScope, '#textarea-no-value', 'not', 'another value');
  }, testTimeout); 
  
  it('identifies select elements with a matching value', async () => {    
    await checkElementValue.call(browserScope, '#select-value', null, 'two');
  }, testTimeout);

  it('identifies select elements without a matching value', async () => {    
    await checkElementValue.call(browserScope, '#select-no-value', 'not', 'some other unrelated value');
  }, testTimeout);   
 
  it('throws an error if the element does not have a value', async () => {
    await expect(checkElementValue.call(browserScope, 'h1')).rejects.toThrow('Expected "h1" to have a value');
  }, testTimeout); 

  it('does not find elements that do not exist on the page', async () => {
    await expect(checkElementValue.call(browserScope, '.bueller')).rejects.toThrow('Error: failed to find element matching selector ".bueller"');
  }, testTimeout); 

}); 