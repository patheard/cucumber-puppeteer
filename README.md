[![circleci](https://img.shields.io/circleci/project/github/patheard/cucumber-puppeteer.svg)](https://circleci.com/gh/patheard/cucumber-puppeteer)
[![codecov](https://codecov.io/gh/patheard/cucumber-puppeteer/branch/master/graph/badge.svg)](https://codecov.io/gh/patheard/cucumber-puppeteer)

# Cucumber and Puppeteer

A Node.js template for end-to-end testing your app with [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Puppeteer](https://github.com/GoogleChrome/puppeteer).  Look at the `*.feature` files to see the different tests available.

# Start tests
Run all the `/features/**/*.feature` files in the project:  

```bash
npm start        # requires Node 10+
```

Configuration and hooks are loaded from `/features/config.js`.  You can override behaviour with the following environment variables:

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

# Use in your own project
To use this in your own project as a dependency, check out the [test-cuke](https://github.com/patheard/test-cuke) example.

# Unit tests

```bash
npm test         # after running `npm run test-server`
```

# License and Credits

This code is licensed under the MIT license.
* Initial template from [anephenix/cucumber-and-puppeteer](https://github.com/anephenix/cucumber-and-puppeteer) 
* Generic step definition idea from [webdriverio/cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate)