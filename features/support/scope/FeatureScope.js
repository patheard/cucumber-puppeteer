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

    /**
     * Checks if a new feature is being run.
     * @param {String} currentFeature Name of the feature being run.
     */
    isNewFeature(currentFeature){
        return this.feature !== currentFeature;
    }

    /**
     * Initializes the scope for the current feature file.
     * @param {String} currentFeature Name of the feature being run.
     * @param {Object} worldParameters Parameters passed to the world constructor by Cucumber.js' --world-parameters CLI arg.
     */
    async init(currentFeature, worldParameters){
        this.feature = currentFeature;
        
        if(this.browserScope){            
            await this.browserScope.close();
            this.browserScope = null;
        }
        
        this.browserScope = new BrowserScope({parameters: worldParameters});
        await this.browserScope.init();
    }
}

module.exports = FeatureScope;