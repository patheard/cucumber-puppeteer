/**
 * Configure the test suite
 * https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md
 */
const { After, AfterAll, Before, setDefaultTimeout, setWorldConstructor } = require('cucumber');
const FeatureScope = require('./support/scope/FeatureScope');
const BrowserScope = require('./support/scope/BrowserScope');

// Timeout, in milliseconds, for puppeteer actions
setDefaultTimeout(10 * 1000);

// `ScenarioScope` is provided to all hooks and test steps in a scenario as `this`
setWorldConstructor(BrowserScope)

// Keep a consistent web browser and page for all scenarios in a feature file.
const featureScope = new FeatureScope();

// Before hook for each scenario
Before(async function(scenario) {

  // Check if the current scenario is in the same feature test
  const currentFeature = scenario.sourceLocation.uri;
  if(featureScope.isNewFeature(currentFeature))
    await featureScope.init(currentFeature);
  
  this.page = featureScope.browserScope.page;
  this.browser = featureScope.browserScope.browser;
});

// After hook for each scenario
After(async function(){
  featureScope.browserScope = this;
});

// After all feature tests are complete
AfterAll(async function() {
  await featureScope.browserScope.close();
});
