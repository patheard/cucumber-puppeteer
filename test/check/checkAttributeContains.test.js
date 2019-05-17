const checkAttributeContains = require('../../features/support/check/checkAttributeContains');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');


const testUrl = 'http://localhost:8080/checkAttribute.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl);
});
afterAll(async () => {
  await browserScope.close();
});

describe('checkAttributeContains', () => {

  it('finds matching attribute values', async () => {    
    await checkAttributeContains.call(browserScope, 'class', '#cssClass', null, 'bambaz');
    await checkAttributeContains.call(browserScope, 'href', '#href', null, '/some');
    await checkAttributeContains.call(browserScope, 'data-favorite-snack', 'ul', null, 'mu');
  });

  it('fails if property values do not match', async () => {    
    await expect(checkAttributeContains.call(browserScope, 'class', '#cssClass', null, 'bort')).rejects.toThrow('Expected "foobar bambaz" to contain "bort" of element "#cssClass" attribute "class"');
  });

  it('finds property values that do not match', async () => {    
    await checkAttributeContains.call(browserScope, 'class', '#cssClass', 'not', 'bort');
  });

  it('fails if the element does not exist', async () => {    
    await expect(checkAttributeContains.call(browserScope, 'class', '#missing', 'not', 'bort')).rejects.toThrow('Error: failed to find element matching selector "#missing"');
  });

  it('fails if the property does not exist', async () => {    
    await expect(checkAttributeContains.call(browserScope, 'class', 'h1', 'not', 'bort')).rejects.toThrow('Expected "class" to exist');
  });    

}); 