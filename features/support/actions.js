// Dependencies
const pages = require('./pages');
const selectors = require('./selectors');
const scope = require('./scope');

// Defines whether puppeteer runs Chrome in headless mode.
let headless = true;
let slowMo = 0;
// Chrome is set to run headlessly and with no slowdown in CircleCI
if (process.env.CIRCLECI) headless = true;
if (process.env.CIRCLECI) slowMo = 0;

const pending = callback => {
  callback(null, 'pending');
};

const visitHomepage = async () => {
  if (!scope.browser)
    scope.browser = await scope.driver.launch({ headless, slowMo });
  scope.context.currentPage = await scope.browser.newPage();
  scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
  const url = scope.host + pages.home;
  const visit = await scope.context.currentPage.goto(url, {
    waitUntil: 'networkidle2'
  });
  return visit;
};

const clickOnItem = async link => {
  const { currentPage } = scope.context;
  return await currentPage.click(selectors.links[link]);
};

const takenToPage = async pageName => {
  const url = scope.host + pages[pageName];
  const urlMatched = scope.context.currentPage.waitForFunction(
    `window.location.href === '${url}'`,
    { mutation: true }
  );
  await urlMatched;
};

const fillInFormField = async (field, value) => {
  const { currentPage } = scope.context;
  const fieldPresent = await currentPage.waitForSelector(
    `input[name="${field}"]`
  );
  await fieldPresent;
  await currentPage.focus(`input[name="${field}"]`);
  await currentPage.type(`input[name="${field}"]`, value, { delay: 1 });
  return;
};

const pressButton = async button => {
  const { currentPage } = scope.context;
  return await currentPage.click(selectors.buttons[button]);
};

const shouldBeOnPage = async pageName => {
  const url = scope.host + pages[pageName];
  const urlMatched = scope.context.currentPage.waitForFunction(
    `window.location.href === '${url}'`,
    { mutation: true }
  );
  await urlMatched;
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const shouldSeeText = async text => {
  await delay(100);
  const { currentPage } = scope.context;
  const content = await currentPage.content();
  if (!content.includes(text))
    throw new Error(
      `Expected page to contain text: ${text}, but page contains only: ${content}`
    );
};

const shouldNotSeeText = async text => {
  await delay(100);
  const { currentPage } = scope.context;
  const content = await currentPage.content();
  if (content.includes(text))
    throw new Error(
      `Expected page to not contain text: ${text}, but page contains: ${content}`
    );
};

const hoverOverItem = async text => {
  return await scope.context.currentPage.hover(selectors.hover[text]);
};

const wait = async timeInSeconds => {
  const time = parseInt(timeInSeconds) * 1000;
  await delay(time);
};

const takenToPageForItem = async (pageName, item) => {
  await delay(50);
  /* NOTE - asserts that all pages that execute a function are async */
  const url = scope.host + (await pages[pageName](item));
  const urlMatched = scope.context.currentPage.waitForFunction(
    `window.location.href === '${url}'`,
    { mutation: true }
  );
  await urlMatched;
};

const reloadPage = async () => await scope.context.currentPage.reload();

const selectValueFromField = async (value, field) => {
  const { currentPage } = scope.context;
  const fieldPresent = await currentPage.waitForSelector(
    `select[name="${field}"]`
  );
  await fieldPresent;
  await currentPage.select(`select[name="${field}"]`, value);
  return;
};

module.exports = {
  pending,
  headless,
  visitHomepage,
  clickOnItem,
  takenToPage,
  fillInFormField,
  pressButton,
  shouldBeOnPage,
  shouldSeeText,
  shouldNotSeeText,
  hoverOverItem,
  takenToPageForItem,
  reloadPage,
  wait,
  selectValueFromField
};
