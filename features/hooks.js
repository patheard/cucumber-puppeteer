// Dependencies
const { Before, After, BeforeAll, AfterAll } = require('cucumber');
const { FeatureScope } = require('./support/classes');

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
