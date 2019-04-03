const checkScreenshot = require('../../features/support/check/checkScreenshot');
const fs = require('fs');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');
const { deleteFile, pathExists } = require('../../features/support/util/FileSystem');

const testUrl = 'http://localhost:8080/checkScreenshot.html';
const browserScope = new BrowserScope();
const getEnvironmentToken = (env) => {
  return env ? `-${env}` : '';
};

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);

  browserScope.config = {
    environment: process.env.ENV ? process.env.ENV : '',
    screenshotPath: './test/screenshots'
  }

});
afterAll(async () => {
  // Delete screenshots from the test run
  const environment = getEnvironmentToken(browserScope.config.environment);
  deleteFile(`${browserScope.config.screenshotPath}/compare/missing${environment}.png`);
  deleteFile(`${browserScope.config.screenshotPath}/ref/missing${environment}.png`);

  await browserScope.close();  
});

describe('checkScreenshot', () => {

  it('finds matching screenshots', async () => {   
    await checkScreenshot.call(browserScope, 'ccc-landing');
  });

  it('finds matching screenshots by setting a custom root dir', async () => {   
    await checkScreenshot.call(browserScope, 'ccc-landing', './test/screenshots');
  });  
  
  it('fails if the screenshot does not exist', async () => { 
    const environment = getEnvironmentToken(browserScope.config.environment);
    expect(await pathExists(`${browserScope.config.screenshotPath}/ref/missing${environment}.png`)).toBe(false);    
    await expect(checkScreenshot.call(browserScope, 'missing')).rejects.toThrow('Expected reference screenshot to exist');
  });

  it('creates a new reference screenshot if the screenshot did not exist', async () => {
    const environment = getEnvironmentToken(browserScope.config.environment);
    expect(await pathExists(`${browserScope.config.screenshotPath}/ref/missing${environment}.png`)).toBe(true);
  });  

  it('fails if the screenshot does not match', async () => {    
    await expect(checkScreenshot.call(browserScope, 'ccc-landing-mismatch')).rejects.toThrow('Expected screenshots to match.');
  });

  it('fails if the screenshots are not the same size', async () => {    
    await expect(checkScreenshot.call(browserScope, 'ccc-landing-wrong-size')).rejects.toThrow('Expected screenshot widths to match.');
  }); 

}); 