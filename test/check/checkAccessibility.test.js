const checkAccessibility = require('../../features/support/check/checkAccessibility');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  browserScope.config = {reportPath: './test/reports'};
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkAccessibility', () => {

  it('finds no accessibility errors with a clean page', async () => {  
    await openUrl.call(browserScope, 'http://localhost:8080/checkAccessibilityPass.html');
    await checkAccessibility.call(browserScope);
  });

  it('finds accessibility errors with a dirty page', async () => {
    await openUrl.call(browserScope, 'http://localhost:8080/checkAccessibilityFail.html');  
    await expect(checkAccessibility.call(browserScope)).rejects.toThrow('Expected no accessibility errors, but found the following in ./test/reports/checkAccessibilityFailTest.csv');
  }); 

}); 