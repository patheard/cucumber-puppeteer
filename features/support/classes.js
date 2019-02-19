const puppeteer = require('puppeteer');

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
        this.page = null;
        this.feature = currentFeature;

        if(this.browser)
        this.browser.close();

        this.browser = await puppeteer.launch({
            args: ['--no-sandbox'], 
            ignoreHTTPSErrors: true
        });
    }
}

module.exports = {
    FeatureScope
};