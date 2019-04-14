/**
 * Open a URL in a web page.
 * @param {String} url The URL to open in a new page object.  This will have the config's
 * rootUrl prepended if it doesn't start with 'http'
 */
module.exports = async function(url) {
    const fullUrl = url.match(/^http.*$/i) ? url : this.config.rootUrl + url;

    this.page = await this.browser.newPage();
    return await this.page.goto(fullUrl, {waitUntil: 'networkidle0'});
};