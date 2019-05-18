const puppeteer = require('puppeteer');
const puppeteerOptions = require('../../../package.json').puppeteerOptions;

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(){
        this.browser = null;
        this.config = null;
        this.page = null;
    }

    async init(){
        const defaultOptions = {
            args: ['--no-sandbox', '--disable-dev-shm-usage'], 
            ignoreHTTPSErrors: true
        }
        this.close();

        this.page = null;
        this.config = {};
        this.browser = await puppeteer.launch({...defaultOptions, ...puppeteerOptions});
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