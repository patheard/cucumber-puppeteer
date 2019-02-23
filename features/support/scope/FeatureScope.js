const BrowserScope = require('./BrowserScope');

/**
 * Common context for all scenarios in a feature file.  Allows us to keep the same browser and
 * page instance across all tests within a feature file.
 */
class FeatureScope {
    constructor(){
        this.browserScope = null;
        this.feature = null;
    }

    isNewFeature(currentFeature){
        return this.feature !== currentFeature;
    }

    async init(currentFeature){
        this.feature = currentFeature;
        
        if(this.browserScope){
            await this.browserScope.close();
            this.browserScope = null;
        }
        
        this.browserScope = new BrowserScope();
        await this.browserScope.init();
    }
}

module.exports = FeatureScope;