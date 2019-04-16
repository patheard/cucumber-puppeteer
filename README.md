[![circleci](https://img.shields.io/circleci/project/github/patheard/cucumber-puppeteer.svg)](https://circleci.com/gh/patheard/cucumber-puppeteer)
[![codecov](https://codecov.io/gh/patheard/cucumber-puppeteer/branch/master/graph/badge.svg)](https://codecov.io/gh/patheard/cucumber-puppeteer)

![Cucumber Puppeteer](https://raw.githubusercontent.com/patheard/cucumber-puppeteer/master/test/screenshots/ref/cucumber-puppeteer-full.png)

A Node.js template for testing your app with [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Puppeteer](https://github.com/GoogleChrome/puppeteer).  The test steps are designed to be generic so you can quickly create integration tests:

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
ROOT_URL         # Prepended to URLs that don't start with 'http' (default: '')
SCREENSHOT_PATH  # Path to save screenshots (default: './test/screenshots'
```

In addition to the above, environment variables are available to the deleteCookie, openUrl and setElementValue actions.  Environment variables are not output to the test results and use the following syntax:

```gherkin
When I open the url "$TEST_URL"
And  I set the element "[type='password']" value to "$TEST_PASSWORD"
```

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
