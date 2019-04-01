const checkUrlContains = require('../../features/support/check/checkUrlContains');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


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

  it('identifies a subpart of a URL', async () => {    
    await checkUrlContains.call(browserScope, "with=some");
  });

  it('identifies a full match of a URL', async () => {    
    await checkUrlContains.call(browserScope, testUrl);
  });

  it('identifies a non-subpart of a URL', async () => {    
    await checkUrlContains.call(browserScope, "#", 'not');
  });

  it("fails when told that URL should contain a specific text, but it doesn't actually contain it", async () => {
    await expect(checkUrlContains.call(browserScope, 'uncheckTitle')).rejects.toThrow('Expected "http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure" to contain "uncheckTitle"');
  });
  
  it('fails when told that URL should not contain a specific text, but it does actually contain it', async () => {
    await expect(checkUrlContains.call(browserScope, 'checkTitle', 'not')).rejects.toThrow('Expected "http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure" to not contain "checkTitle"');
  });

  it('fails when url is empty', async () => {   
    await expect(checkUrlContains.call(browserScope, '')).rejects.toThrow('Expected "http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure" to contain ""');
    await expect(checkUrlContains.call(browserScope, null)).rejects.toThrow('Expected "http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure" to contain "null"');
    await expect(checkUrlContains.call(browserScope, undefined)).rejects.toThrow('Expected "http://localhost:8080/checkTitle.html?with=some&url=params&for=good&measure" to contain "undefined"');
  }); 

}); 