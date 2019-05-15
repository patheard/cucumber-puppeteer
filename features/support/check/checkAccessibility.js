const assert = require('assert').strict;
const { AxePuppeteer } = require('axe-puppeteer');
const AxeReports = require("axe-reports");

/**
 * Uses the Axe accessibility library to check the accessibility of the page.
 * @param {String} reportName Name of the a11y report if errors are found.
 */
module.exports = async function(reportName) {
  const results = await new AxePuppeteer(this.page)
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  const isA11yErrors = results.violations.length > 0;
  const reportPath = `${this.config.reportPath}/${reportName}`;

  // Found errors, create a report
  if(isA11yErrors){ 
    AxeReports.processResults(results, 'csv', reportPath, true);
  }

  assert.strict(isA11yErrors === false, `Expected no accessibility errors, but found the following in ${reportPath}.csv`);
}