const assert = require('assert').strict;
const { AxePuppeteer } = require('axe-puppeteer');
const AxeReports = require("axe-reports");

/**
 * Uses the Axe accessibility library to check the accessibility of the page.
 */
module.exports = async function() {
  const results = await new AxePuppeteer(this.page)
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  const isA11yErrors = results.violations.length > 0;
  let pageTitle, reportPath;

  // Found errors, create a report
  if(isA11yErrors){
    pageTitle = await this.page.title();
    reportPath = `${this.config.reportPath}/${pageTitle.replace(/[\W_]+/g, '')}`;    
    AxeReports.processResults(results, 'csv', reportPath, true);
  }

  assert.strict(isA11yErrors === false, `Expected no accessibility errors, but found the following in ${reportPath}.csv`);
}