const checkTitleContains = require('../../features/support/check/checkTitleContains');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkTitleContains.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkTitleContains', () => {

  it('finds subpart of the title', async () => {   
    await checkTitleContains.call(browserScope, 'Test');
    await checkTitleContains.call(browserScope, '-');
    await checkTitleContains.call(browserScope, 'checkTit');
    await checkTitleContains.call(browserScope, ' ');
  });

  it('finds full matches of title', async () => {   
    await checkTitleContains.call(browserScope, 'checkTitleContains - Test');
  });

  it('identifies non-subpart of the title', async () => {    
    await checkTitleContains.call(browserScope, 'notMatchingTitle - Test', 'not');
    await checkTitleContains.call(browserScope, '-Test', 'not');
  });

  it("fails when told that title should contain a specific text, but it doesn't actually contain it", async () => {
    await expect(checkTitleContains.call(browserScope, 'notMatchingTitle - Test')).rejects.toThrow('Expected "checkTitleContains - Test" to contain "notMatchingTitle - Test"');
  });
  
  it('fails when told that title should not contain a specific text, but it does actually contain it', async () => {
    await expect(checkTitleContains.call(browserScope, 'checkTitleContains - Test', 'not')).rejects.toThrow('Expected "checkTitleContains - Test" to not contain "checkTitleContains - Test"');
  });

  it('fails when title is empty', async () => {   
    await expect(checkTitleContains.call(browserScope, '')).rejects.toThrow('Expected "checkTitleContains - Test" to contain ""');
    await expect(checkTitleContains.call(browserScope, null)).rejects.toThrow('Expected "checkTitleContains - Test" to contain "null"');
    await expect(checkTitleContains.call(browserScope, undefined)).rejects.toThrow('Expected "checkTitleContains - Test" to contain "undefined"');
  }); 

}); 