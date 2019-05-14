const BrowserScope = require('../../features/support/scope/BrowserScope');
const checkContainsText = require('../../features/support/check/checkContainsText');
const openUrl = require('../../features/support/action/openUrl');
const setUserAgent = require('../../features/support/action/setUserAgent');
const waitFor = require('../../features/support/action/waitFor');

const testUrl = 'http://localhost:8080/setUserAgent.html';
const browserScope = new BrowserScope();

beforeAll(async () => {  
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('setUserAgent', () => {

  it('sets a user agent', async () => {
    await setUserAgent.call(browserScope, 'Setting a user agent');
    await waitFor.call(browserScope, 1);
    await checkContainsText.call(browserScope, '.user-agent', null, 'Setting a user agent');
  });

}); 