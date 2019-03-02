const clickElement = require('../../features/support/action/clickElement');
const checkIsChecked= require('../../features/support/check/checkIsChecked');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkIsChecked.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkIsChecked', () => {

    it("finds element that is checked", async () =>{
        await checkIsChecked.call(browserScope, '#checked');
    }, testTimeout);
    
    it("finds element that is unchecked", async () =>{
        await checkIsChecked.call(browserScope, '#not-checked', 'not');
    }, testTimeout);

    it("throws an error when the element is uncheked, but should be checked", async () =>{
        await expect(checkIsChecked.call(browserScope, '#not-checked')).rejects.toThrow('Expected "#not-checked" to be checked'); 
    }, testTimeout);

    it("throws an error when the element is cheked, but should be unchecked", async () =>{
        await expect(checkIsChecked.call(browserScope, '#checked', 'not')).rejects.toThrow('Expected "#checked" to be unchecked'); 
    }, testTimeout);

    it("finds newly checked elements", async () =>{
        await clickElement.call(browserScope, '#tobe-checked');
        await checkIsChecked.call(browserScope, '#tobe-checked');
        await checkIsChecked.call(browserScope, '#checked');
        await checkIsChecked.call(browserScope, '#not-checked', 'not');
    }, testTimeout);    

    it('throws an error when an element cannot be checked', async () => {
        await expect(checkIsChecked.call(browserScope, 'h1')).rejects.toThrow('Error: "h1" is not a checkbox element');
    }, testTimeout); 

    it('throws an error when the element does not exist', async () => {
        await expect(checkIsChecked.call(browserScope, '.foobar')).rejects.toThrow('Error: failed to find element matching selector ".foobar"');
    }, testTimeout); 
    
}); 