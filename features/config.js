// Dependencies
const { Before, After, AfterAll, setDefaultTimeout, setWorldConstructor } = require('cucumber');
const { FeatureScope, World } = require('./support/classes');

setDefaultTimeout(20 * 1000);
setWorldConstructor(World)

const featureScope = new FeatureScope();

Before(async function(scenario) {
  const currentFeature = scenario.sourceLocation.uri;
  if(featureScope.isNewFeature(currentFeature))
    await featureScope.init(currentFeature);
  
  this.page = featureScope.page;
  this.browser = featureScope.browser;
});

After(async function(){
  featureScope.page = this.page;
});

AfterAll(async function() {
  await featureScope.browser.close();
});
