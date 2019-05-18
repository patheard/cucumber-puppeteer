const checkAttributeContains = require('../../features/support/check/checkAttributeContains');
const checkElementVisible = require('../../features/support/check/checkElementVisible');
const setElementStyle = require('../../features/support/action/setElementStyle');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/setElementStyle.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('setElementStyle', () => {

  it('sets the style of an element', async () => {
    await checkElementVisible.call(browserScope, '.hidden', 'not');
    await setElementStyle.call(browserScope, '.hidden', 'display', 'block');
    await checkElementVisible.call(browserScope, '.hidden', null, '30');
  });

  it('sets the style of multiple elements and selectors', async () => {
    await setElementStyle.call(browserScope, 'li, .visible', 'background', 'red');
    await checkAttributeContains.call(browserScope, 'style', '.visible', null, 'background: red');
    await checkAttributeContains.call(browserScope, 'style', 'li:nth-child(1)', null, 'background: red');
    await checkAttributeContains.call(browserScope, 'style', 'li:nth-child(2)', null, 'background: red');
    await checkAttributeContains.call(browserScope, 'style', 'li:nth-child(3)', null, 'background: red');
  }); 

}); 