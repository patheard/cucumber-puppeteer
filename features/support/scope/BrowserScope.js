const puppeteer = require('puppeteer');
const puppeteerOptions = require('../../../package.json').puppeteerOptions;

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(args){
        this.browser = null;
        this.config = null;
        this.page = null;
        this.worldParameters = args && args.parameters ? args.parameters : {};
    }

    async init(){
        const defaultOptions = {
            args: ['--no-sandbox', '--disable-dev-shm-usage'], 
            ignoreHTTPSErrors: true
        }
        this.close();

        this.page = null;
        this.config = {};
        this.browser = await puppeteer.launch({...defaultOptions, ...puppeteerOptions, ...this.worldParameters});
    }

    async close(){
        if(this.browser)
            await this.browser.close();
        
        this.browser = null;
        this.config = null;
        this.page = null;
    }
}

module.exports = BrowserScope;