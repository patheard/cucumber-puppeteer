/**
 * Configure the test suite
 * https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md
 */
const { After, AfterAll, Before, setDefaultTimeout, setWorldConstructor } = require('cucumber');
const { FeatureScope, ScenarioScope } = require('./support/classes');

// Timeout, in milliseconds, for puppeteer actions
setDefaultTimeout(10 * 1000);

// `ScenarioScope` is provided to all hooks and test steps in a scenario as `this`
setWorldConstructor(ScenarioScope)

// Keep a consistent web browser and page for all scenarios in a feature file.
const featureScope = new FeatureScope();

// Before hook for each scenario
Before(async function(scenario) {

  // Check if the current scenario is in the same feature test
  const currentFeature = scenario.sourceLocation.uri;
  if(featureScope.isNewFeature(currentFeature))
    await featureScope.init(currentFeature);
  
  this.page = featureScope.page;
  this.browser = featureScope.browser;
});

// After hook for each scenario
After(async function(){
  featureScope.page = this.page;
});

// After all feature tests are complete
AfterAll(async function() {
  await featureScope.browser.close();
});
