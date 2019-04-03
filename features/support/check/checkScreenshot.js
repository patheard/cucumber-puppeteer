const assert = require('assert').strict;
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const { promisify } = require('util');
const { pathExists } = require('../util/FileSystem');

// Create promise based versions of the callback functions
const copyFile = promisify(fs.copyFile);

/**
 * Takes a screenshot of the browser's current viewport and compares it to a reference screenshot
 * (if it exists).  If the reference does not exist, the screenshot is saved as the reference
 * and the test is marked as failed.
 * @param {String} screenName The name of the screenshot to take
 * @param {String} rootDir The root directory to save screenshots in.  If not specified, it's taken from the BrowserScope.config.screenshotPath property.
 */
module.exports = async function(screenName, rootDir) {
  const screenshotPath = rootDir ? rootDir : this.config.screenshotPath;
  const environment = this.config.environment ? `-${this.config.environment}` : ''; // Allow for different screenshots per environment  
  const pathCompare = `${screenshotPath}/compare/${screenName}${environment}.png`;
  const pathDiff = `${screenshotPath}/diff/${screenName}${environment}.png`;
  const pathRef = `${screenshotPath}/ref/${screenName}${environment}.png`;

  await this.page.screenshot({path: pathCompare, fullPage : true});

  // If there's no reference screenshot, save the taken screenshot as the new reference
  if(!await pathExists(pathRef)){
    await copyFile(pathCompare, pathRef);
    throw new Error('Expected reference screenshot to exist');

  // Compare the two screenshots
  } else {
    const imgCompare = await parseImage(pathCompare);
    const imgRef = await parseImage(pathRef);

    assert.strictEqual(imgCompare.width, imgRef.width, 'Expected screenshot widths to match.');
    assert.strictEqual(imgCompare.height, imgRef.height, 'Expected screenshot heights to match.');

    // Compare the images
    const imgDiff = await new PNG({width: imgCompare.width, height: imgCompare.height});
    const diffPixels = await pixelmatch(imgCompare.data, imgRef.data, imgDiff.data, imgCompare.width, imgCompare.height, {threshold: 0.1});
    
    // If they don't match, save the difference screenshot
    if(diffPixels > 0){
      await imgDiff.pack().pipe(fs.createWriteStream(pathDiff));
    }

    assert.strictEqual(diffPixels, 0, 'Expected screenshots to match.');
  } 
}

/**
 * Parses an image path to a PNG image object.
 * @param {String} filename Full path to the image to parse as a PNG
 */
async function parseImage(filename){
  return new Promise(resolve => {
    const img = fs
      .createReadStream(filename)
      .pipe(new PNG())
      .on('parsed', () => resolve(img))
  });
}
