// Behavioural tests for index.html
const isVisible = require('../../features/support/action/isVisible');
const openUrl = require('../../features/support/action/openUrl');
const ScenarioScope = require('../../features/support/scope/ScenarioScope');
const FeatureScope = require('../../features/support/scope/FeatureScope'); 

const testTimeout = 10000;
const testUrl = 'http://localhost:8080/isVisible.html';
const featureScope = new FeatureScope();
const scenarioScope = new ScenarioScope();

beforeAll(async () => {
  await featureScope.init();
  scenarioScope.browser = featureScope.browser;
  await openUrl.call(scenarioScope, testUrl);
});
afterAll(async () => {
  await scenarioScope.page.close();
  await scenarioScope.browser.close();
});

describe('isVisible', () => {

  it('finds visible elements', async () => {    
    await isVisible.call(scenarioScope, '.visible');
  }, testTimeout);

  it('does not find hidden elements', async () => {
    await expect(isVisible.call(scenarioScope, '.hidden')).rejects.toThrow('Expected ".hidden" to be visible');
  }, testTimeout);  

  it('finds hidden elements when told to look for them', async () => {
    await isVisible.call(scenarioScope, '.hidden', 'not');
  }, testTimeout); 

  it('does not finds elements that are visible if told they should be hidden', async () => {
    await expect(isVisible.call(scenarioScope, '.visible', 'not')).rejects.toThrow('Expected ".visible" to be hidden');
  }, testTimeout);   

  it('does not find elements that do not exist on the page', async () => {
    await expect(isVisible.call(scenarioScope, '.bueller')).rejects.toThrow('Expected ".bueller" to be visible');
  }, testTimeout); 

}); 