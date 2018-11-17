/*eslint no-console: ["error", { allow: ["log"] }] */
// Dependencies
const { After, Before, AfterAll } = require('cucumber');
const scope = require('./support/scope');

// Here is where you might clean up database tables to have a clean slate before the tests run
// Before(async () => {
// });

// Here we clean up the browser session
After(async () => {
  if (scope.browser && scope.context.currentPage) {
    const cookies = await scope.context.currentPage.cookies();
    if (cookies && cookies.length > 0) {
      await scope.context.currentPage.deleteCookie(...cookies);
    }
    await scope.context.currentPage.close();
    scope.context.currentPage = null;
  }
});

AfterAll(async () => {
  if (scope.browser) await scope.browser.close();
  // If you have your API and Web servers running, you can shut them down afterwards
  // scope.api.shutdown(() => console.log('\nAPI is shut down'));
  // scope.web.shutdown(() => console.log('Web is shut down'));
});
