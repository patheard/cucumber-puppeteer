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
        
        // Preserve world parameters that may have been passed on the intial launch
        let worldParameters = {};
        if(this.browserScope){            
            await this.browserScope.close();
            worldParameters = this.browserScope.worldParameters;
            this.browserScope = null;
        }
        
        this.browserScope = new BrowserScope({parameters: worldParameters});
        await this.browserScope.init();
    }
}

module.exports = FeatureScope;