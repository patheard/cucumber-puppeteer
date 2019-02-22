const checkContainsText = require('../../features/support/check/checkContainsText');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/checkContainsText.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkContainsText', () => {

  it('finds substrings of text', async () => {   
    await checkContainsText.call(browserScope, '.wizard', null, 'Harry');
  }, testTimeout);

  it('finds long substrings of text', async () => {    
    await checkContainsText.call(browserScope, '.plumbus', null, 'First they take the dinglebop, and they smooth it out, with a bunch of Schleem.');
  }, testTimeout);  

  it('finds full matches of text', async () => {    
    await checkContainsText.call(browserScope, '.wizard', null, 'You\'re a wizard Harry');
  }, testTimeout);  

  it('does not find text that does not exist', async () => {
    await expect(checkContainsText.call(browserScope, '.wizard', null, 'fleeb')).rejects.toThrow('Expected ".wizard" to contain "fleeb"');
  }, testTimeout); 

  it('succeeds when told text should not exist', async () => {
    await checkContainsText.call(browserScope, '.wizard', 'does not', 'fleeb');
  }, testTimeout);   

  it('fails when told text should not exist, but it does (plot twist!)', async () => {
    await expect(checkContainsText.call(browserScope, '.wizard', 'does not', 'wizard')).rejects.toThrow('Expected ".wizard" to not contain "wizard"');
  }, testTimeout); 
  
  it('fails when the element does not exist', async () => {
    await expect(checkContainsText.call(browserScope, '.foobar', null, 'fleeb')).rejects.toThrow('Error: failed to find element matching selector ".foobar"');
  }, testTimeout);   

}); 