const checkElementValue = require('../../features/support/check/checkElementValue');
const setElementValue = require('../../features/support/action/setElementValue');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/setElementValue.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('setElementValue', () => {

  it('sets the value of an input element', async () => {
    await checkElementValue.call(browserScope, 'input.enabled', null, 'some filler value');
    await setElementValue.call(browserScope, 'input.enabled', 'clean living');
    await checkElementValue.call(browserScope, 'input.enabled', null, 'clean living');
  });

  it('sets the value of a textarea', async () => {
    await checkElementValue.call(browserScope, 'textarea', null, '');
    await setElementValue.call(browserScope, 'textarea', 'another text value now');
    await checkElementValue.call(browserScope, 'textarea', null, 'another text value now');
  });  

  it('sets the value of a select element when the value is part of the select element options', async () => {
    await checkElementValue.call(browserScope, 'select', null, '');
    await setElementValue.call(browserScope, 'select', 'spongebob');
    await checkElementValue.call(browserScope, 'select', null, 'spongebob');
  });

  it('fails to set the value of a select when the options do not contain the value', async () => {
    await checkElementValue.call(browserScope, 'select', null, 'spongebob');
    await expect(setElementValue.call(browserScope, 'select', 'squidward')).rejects.toThrow('Error: unable to set "select" value to "squidward"');
    await checkElementValue.call(browserScope, 'select', null, 'spongebob');
  });    

  it('fails if the element is disabled and does not allow its value to be set', async () => {
    await expect(setElementValue.call(browserScope, 'input[disabled]', 'bambaz')).rejects.toThrow('Error: unable to set "input[disabled]" value to "bambaz"');
  });  

  it('fails if the element is readonly and does not allow its value to be set', async () => {
    await expect(setElementValue.call(browserScope, 'input[readonly]', 'plumbus')).rejects.toThrow('Error: unable to set "input[readonly]" value to "plumbus"');
  });    

  it('fails if the element does not have a value to set', async () => {
    await expect(setElementValue.call(browserScope, 'h1', 'foobar')).rejects.toThrow('Error: unable to set "h1" value to "foobar"');
  });  

  it('fails if the element does not exist', async () => {
    await expect(setElementValue.call(browserScope, '.bueller')).rejects.toThrow('Error: failed to find element matching selector ".bueller"');
  });  

}); 