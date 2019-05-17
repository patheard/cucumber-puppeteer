const checkContainsText = require('../../features/support/check/checkContainsText');
const checkHasFocus = require('../../features/support/check/checkHasFocus');
const keyboardPress = require('../../features/support/action/keyboardPress');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/keyboardPress.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('keyboardPress', () => {

  it('presses a key', async () => {
    await checkContainsText.call(browserScope, '.message', null, 'Pitiful failure...');
    await keyboardPress.call(browserScope, 'Enter');
    await checkContainsText.call(browserScope, '.message', null, 'Great success!');
  });

  it('presses a key and focuses the element', async () => {
    await checkHasFocus.call(browserScope, 'input[type="text"]', 'not');
    await keyboardPress.call(browserScope, 'Enter', 'input[type="text"]');
    await checkHasFocus.call(browserScope, 'input[type="text"]');
  });  

});