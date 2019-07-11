[![circleci](https://img.shields.io/circleci/project/github/patheard/cucumber-puppeteer.svg)](https://circleci.com/gh/patheard/cucumber-puppeteer)
[![codecov](https://codecov.io/gh/patheard/cucumber-puppeteer/branch/master/graph/badge.svg)](https://codecov.io/gh/patheard/cucumber-puppeteer)

![Cucumber Puppeteer](https://raw.githubusercontent.com/patheard/cucumber-puppeteer/master/test/screenshots/ref/cucumber-puppeteer-full.png)

A Node.js behavioural test framework made using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Puppeteer](https://github.com/GoogleChrome/puppeteer).  The test steps are generic so you can quickly create your test suite:

```gherkin
Scenario: Open the search page and find products
  When  I open the url "https://someurl.com/search"
  And   I set the element "input[name='search']" value to "plumbus"
  And   I click the button ".search-button"
  Then  I expect the element "#results > .result-count" contains text "3 products found"
```

# Test steps
Look at the [`*.feature`](https://github.com/patheard/cucumber-puppeteer/tree/master/features) files in the project to see the available test steps.  You can run them all with: 

```bash
npm start        # after running `npm run test-server`
```

Configuration and hooks are loaded from [`/features/support/config.js`](https://github.com/patheard/cucumber-puppeteer/blob/master/features/support/config.js).  You can override behaviour with the following environment variables:

```bash
ENV              # Appended to screenshot names (default: '')
REPORT_PATH      # Path where Axe accessibility reports will be saved (default: './test/reports')
ROOT_URL         # Prepended to URLs that don't start with 'http' (default: '')
SCREENSHOT_PATH  # Path to save screenshots (default: './test/screenshots'
```

In addition to the above, environment variables are available to the deleteCookie, openUrl and setElementValue actions.  Environment variables are not output to the test results and use the following syntax:

```gherkin
When I open the url "$TEST_URL"
And  I set the element "[type='password']" value to "$TEST_PASSWORD"
```

# Puppeteer launch options
You can customize [Puppeteer's launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions) by adding a `puppeteerOptions` object to your package.json:
```javascript
// package.json
"puppeteerOptions" : {
    "headless": false,
    "sloMo": 250,
    "defaultViewport": {
        "width": 1000,
        "height": 1000
    }
}

```
Or by using the Cucumber.js [`--world-parameters`](https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#world-parameters) command line arg:

```javascript
// package.json
"scripts": {
    "test:headful": "npx cucumber-js --world-parameters \"{\\\"headless\\\": false}\""
}
```

:warning: Note that `--world-parameters` will take precedence.

# Use in your project
To use this in your own project as a dependency, check out the [test-cuke](https://github.com/patheard/test-cuke) example.

# Unit tests

```bash
npm test         # after running `npm run test-server`
```

# License and credits

This code is licensed under the MIT license.
* Initial template from [anephenix/cucumber-and-puppeteer](https://github.com/anephenix/cucumber-and-puppeteer) 
* Generic step definition idea from [webdriverio/cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate)
