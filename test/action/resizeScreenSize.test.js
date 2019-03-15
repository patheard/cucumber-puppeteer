const resizeScreenSize = require('../../features/support/action/resizeScreenSize');
const openUrl = require('../../features/support/action/openUrl');
const BrowserScope = require('../../features/support/scope/BrowserScope');

const testTimeout = 30000;
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
    await resizeScreenSize.call(browserScope, 1285, 450);
    await resizeScreenSize.call(browserScope, 729, 500);
  }, testTimeout);

  it('cannot resize screen size to a invalid height parameter in pixels', async () => {
    await expect(resizeScreenSize.call(browserScope, 600, null)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, undefined)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, '500')).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, 600, 729.12)).rejects.toThrow('Error: input is invalid');
  }, testTimeout);

  it('cannot resize screen size to a invalid width parameter in pixels', async () => {
    await expect(resizeScreenSize.call(browserScope, null, 600)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, undefined, 600)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, '500', 600)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, 600.55, 729)).rejects.toThrow('Error: input is invalid');
  }, testTimeout);

  it('cannot resize screen size to a invalid width and height in pixels', async () => {
    await expect(resizeScreenSize.call(browserScope, null, null)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, undefined, undefined)).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, "600", "400")).rejects.toThrow('Error: input is invalid');
    await expect(resizeScreenSize.call(browserScope, 600.55, 729.12)).rejects.toThrow('Error: input is invalid');
  }, testTimeout);

}); 