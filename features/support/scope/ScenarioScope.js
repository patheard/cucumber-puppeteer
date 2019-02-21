/**
 * Common context for each test scenario, provided to all test steps and Before/After hooks as `this`
 */
class ScenarioScope {
    constructor() {        
        this.browser = null;    // web browser, used for all scenarios in the feature file
        this.page = null;       // current web page
    }
} 

module.exports = ScenarioScope;