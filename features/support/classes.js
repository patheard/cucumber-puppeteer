const puppeteer = require('puppeteer');

/**
 * Common context for all scenarios in a feature file.  Allows us to keep the same browser and
 * page instance across all tests within a feature file.
 */
class FeatureScope {
    constructor(){
        this.browser = null;
        this.page = null;
        this.feature = null;
    }

    isNewFeature(currentFeature){
        return this.feature !== currentFeature;
    }

    async init(currentFeature){

        if(this.page)
            await this.page.close();

        if(this.browser)
            await this.browser.close();

        this.page = null;
        this.feature = currentFeature;
        this.browser = await puppeteer.launch({
            args: ['--no-sandbox'], 
            ignoreHTTPSErrors: true
        });
    }
}

/**
 * Common context for each test scenario, provided to all test steps and Before/After hooks as `this`
 */
class ScenarioScope {
    constructor() {        
        this.browser = null;    // web browser, used for all scenarios in the feature file
        this.page = null;       // current web page
    }
} 


module.exports = {
    FeatureScope,
    ScenarioScope
};