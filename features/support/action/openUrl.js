/**
 * Open a URL in a web page.
 * @param {String} url The URL to open in a new page object.  This will have the config's
 * rootUrl prepended if it doesn't start with 'http'
 * @param {String} userAgent The browser user agent to set.
 */
module.exports = async function(url, userAgent) {
    const fullUrl = url.match(/^http.*$/i) ? url : this.config.rootUrl + url;

    this.page = await this.browser.newPage();

    // Set the user agent if it exists
    if(userAgent){
        await this.page.setUserAgent(userAgent);
    }

    return await this.page.goto(fullUrl, {waitUntil: 'networkidle0'});
};