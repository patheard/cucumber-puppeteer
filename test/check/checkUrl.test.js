const checkUrl = require('../../features/support/check/checkUrl');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkUrl', () => {

  it('identifies a matching URL', async () => {    
    await checkUrl.call(browserScope, null, testUrl);
  }, testTimeout);

  it('fails when the URLs do not match and they should', async () => {
    const nonMatchingUrl = "http://fullahead.org";
    await expect(checkUrl.call(browserScope, null, nonMatchingUrl)).rejects.toThrow(`Expected "${nonMatchingUrl}" to equal "${testUrl}"`);
  }, testTimeout);  

  it('identifies a non-matching URL', async () => {
    const nonMatchingUrl = "http://fullahead.org";
    await checkUrl.call(browserScope, "not", nonMatchingUrl);
  }, testTimeout);

  it('fails when the URLs match and they should not', async () => {
    await expect(checkUrl.call(browserScope, "not", testUrl)).rejects.toThrow(`Expected "${testUrl}" to not equal "${testUrl}"`);
  }, testTimeout);    

}); 