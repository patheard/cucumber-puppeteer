const {Status, SummaryFormatter } = require('cucumber');
const STATUS_CHARACTER_MAPPING = {
  [Status.AMBIGUOUS]: '~',
  [Status.FAILED]: '×',
  [Status.PASSED]: '√',
  [Status.PENDING]: '/',
  [Status.SKIPPED]: '-',
  [Status.UNDEFINED]: '?',
}

/**
 * Provide pretty formatting of test results
 */
class PrettyFormatter extends SummaryFormatter {
  constructor(options) {
    super(options)
    options.eventBroadcaster
      .on('test-case-started', this.logTestCaseName.bind(this))
      .on('test-step-finished', this.logTestStep.bind(this))
      .on('test-case-finished', this.logSeparator.bind(this))

    this.scenarioCount = 1;
  }

  logTestCaseName({sourceLocation}) {
    const {pickle} = this.eventDataCollector.getTestCaseData(sourceLocation)
    this.log(`${this.scenarioCount++}) Scenario: ${pickle.name} ${this.colorFns['location'](sourceLocation.uri)}\n`);
  }

  logTestStep({testCase, index, result}) {
    const {gherkinKeyword, pickleStep} = this.eventDataCollector.getTestStepData({testCase, index});
    const {status} = result;
    if (pickleStep) {
      this.log(`   ${this.colorFns[status](STATUS_CHARACTER_MAPPING[status])} ${gherkinKeyword}${pickleStep.text}\n`);
    }
  }

  logSeparator() {
    this.log('\n');
  }
}

module.exports = PrettyFormatter;