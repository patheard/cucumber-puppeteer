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

        if(this.browser)
            await this.browser.close();

        if(this.page)
            await this.page.close();

        this.page = null;
        this.feature = currentFeature;
        this.browser = await puppeteer.launch({
            args: ['--no-sandbox'], 
            ignoreHTTPSErrors: true
        });
    }
}

class World {
    constructor() {
        this.page = null;
        this.browser = null;
    }
} 

module.exports = {
    FeatureScope,
    World
};