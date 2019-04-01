/**
 * Configure the test suite
 * https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md
 */
const { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout, setWorldConstructor } = require('cucumber');
const FeatureScope = require('./scope/FeatureScope');
const BrowserScope = require('./scope/BrowserScope');
const fs = require('fs');

// Timeout, in milliseconds, for puppeteer actions
setDefaultTimeout(10 * 1000);

// `BrowserScope` is provided to all hooks and test steps in a scenario as `this`
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

// Run once before tests
BeforeAll(async function(){
  makeDirectory('./screenshots/diff')
  makeDirectory('./screenshots/error')
  makeDirectory('./screenshots/reference')
  makeDirectory('./screenshots/taken')
});

// After hook for each scenario
After(async function(scenario){
  featureScope.browserScope = this;

  // Take a screenshot if a scenario fails
  if(scenario.result.status === Status.FAILED) {
    const screenShotName = scenario.pickle.name.replace(/[\W_]+/g, '-');
    await this.page.screenshot({
      path: `./screenshots/error/${screenShotName}.png`
    });
  }
});

// After all feature tests are complete
AfterAll(async function() {
  await featureScope.browserScope.close();
});

/**
 * Create a directory if it doesn't exist
 * @param {String} path Path of the directory to create.
 */
function makeDirectory(path){
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true});
  }
}