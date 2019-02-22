/**
 * Open a URL in a web page.
 * @param {String} url The URL to open in a new page object.
 */
module.exports = async function(url) {
    this.page = await this.browser.newPage();
    return await this.page.goto(url, {waitUntil: 'networkidle0'});
};