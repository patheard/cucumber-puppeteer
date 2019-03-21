const checkAttribute = require('../../features/support/check/checkAttribute');
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

describe('checkAttribute', () => {

  it('finds matching attribute values', async () => {    
    await checkAttribute.call(browserScope, 'class', '#cssClass', null, 'foobar bambaz');
    await checkAttribute.call(browserScope, 'href', '#href', null, '/somepage');
    await checkAttribute.call(browserScope, 'data-favorite-snack', 'ul', null, 'muffins');
  });

  it('fails if property values do not match', async () => {    
    await expect(checkAttribute.call(browserScope, 'class', '#cssClass', null, 'bort')).rejects.toThrow('Expected "foobar bambaz" to equal "bort" of element "#cssClass" attribute "class"');
  });

  it('finds property values that do not match', async () => {    
    await checkAttribute.call(browserScope, 'class', '#cssClass', 'not', 'bort');
  });

  it('fails if the element does not exist', async () => {    
    await expect(checkAttribute.call(browserScope, 'class', '#missing', 'not', 'bort')).rejects.toThrow('Error: failed to find element matching selector "#missing"');
  });

  it('fails if the property does not exist', async () => {    
    await expect(checkAttribute.call(browserScope, 'class', 'h1', 'not', 'bort')).rejects.toThrow('Expected "class" to exist');
  });    

}); 