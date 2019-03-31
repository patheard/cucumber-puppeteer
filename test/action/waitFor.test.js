const waitFor = require('../../features/support/action/waitFor');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/waitFor.html';
const browserScope = new BrowserScope();

beforeAll(async () => {  
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('waitFor', () => {

  it('waits a specified integer period of time', async () => {
    const startTime = new Date().getTime();
    await waitFor.call(browserScope, '2.1');
    const endTime = new Date().getTime();

    expect(endTime - startTime).toBeGreaterThanOrEqual(2000);
  });

  it('waits a specified decimal period of time', async () => {
    const startTime = new Date().getTime();
    await waitFor.call(browserScope, '1.6');
    const endTime = new Date().getTime();

    expect(endTime - startTime).toBeGreaterThanOrEqual(1500);
  });  

  it('fails if given a non-numeric value', async () => {
    await expect(waitFor.call(browserScope, 'banananana')).rejects.toThrow('Error: "banananana" is not a valid time to wait');
    await expect(waitFor.call(browserScope, '-1.23')).rejects.toThrow('Error: "-1.23" is not a valid time to wait');
  });  

}); 