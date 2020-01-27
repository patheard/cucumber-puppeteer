const BrowserScope = require('../../features/support/scope/BrowserScope');
const checkElementValue = require('../../features/support/check/checkElementValue');
const fileUpload = require('../../features/support/action/fileUpload');
const openUrl = require('../../features/support/action/openUrl');

const browserScope = new BrowserScope();
const testUrl = 'http://localhost:8080/fileUpload.html';

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);  
});
afterAll(async () => {
  await browserScope.close();
});

describe('fileUpload', () => {

  it('sets the value of a file input element', async () => {    
    await fileUpload.call(browserScope, 'input[type="file"]', './test/screenshots/ref/ccc-landing.png');
    await checkElementValue.call(browserScope, 'input[type="file"]', null, 'C:\\fakepath\\ccc-landing.png');
  }); 
  
  it('fails if the file input element does not exist', async () => {    
    await expect(fileUpload.call(browserScope, '.bueller', './test/screenshots/ref/ccc-landing.png')).rejects.toThrow('Cannot read property \'uploadFile\' of null');
  });

}); 