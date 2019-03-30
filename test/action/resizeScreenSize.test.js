const checkContainsText = require('../../features/support/check/checkContainsText');
const resizeScreenSize = require('../../features/support/action/resizeScreenSize');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testUrl = 'http://localhost:8080/resizeScreenSize.html';
const browserScope = new BrowserScope();

beforeAll(async () => {
  await browserScope.init();
  await openUrl.call(browserScope, testUrl); 
});
afterAll(async () => {
  await browserScope.close();
});

describe('resizeScreenSize', () => {

  it('resize sreen size to a given width and height in pixels', async () => {
    await resizeScreenSize.call(browserScope, 600, 400);
    await checkContainsText.call(browserScope, '#boxwidth', null, 'Box width : 100');
    await resizeScreenSize.call(browserScope, 1280, 680);
    await checkContainsText.call(browserScope, '#boxwidth', null, 'Box width : 700');
  });

  it('cannot resize screen size to a invalid height parameter in pixels', async () => {
    await expect(resizeScreenSize.call(browserScope, 600, null)).rejects.toThrow('Error: width "600" or height "null" is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, undefined)).rejects.toThrow('Error: width "600" or height "undefined" is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, '500')).rejects.toThrow('Error: width "600" or height "500" is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, 729.12)).rejects.toThrow('Error: width "600" or height "729.12" is invalid');
  });

  it('cannot resize screen size to a invalid width parameter in pixels', async () => {
    await expect(resizeScreenSize.call(browserScope, null, 600)).rejects.toThrow('Error: width "null" or height "600" is invalid');
    await expect(resizeScreenSize.call(browserScope, undefined, 600)).rejects.toThrow('Error: width "undefined" or height "600" is invalid');
    await expect(resizeScreenSize.call(browserScope, '500', 600)).rejects.toThrow('Error: width "500" or height "600" is invalid');
    await expect(resizeScreenSize.call(browserScope, 600.55, 729)).rejects.toThrow('Error: width "600.55" or height "729" is invalid');
  });

}); 