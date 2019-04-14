const puppeteer = require('puppeteer');

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
        this.close();

        this.page = null;
        this.config = {};
        this.browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-dev-shm-usage'], 
            ignoreHTTPSErrors: true
        });
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