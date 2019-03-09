/**
 * Wait for a given number of seconds.
 * @param {String} secondsStr The number of seconds to wait.
 */
module.exports = async function(secondsStr) {
    const seconds = Number(secondsStr);

    

    // Make sure we've got a valid number that's greater than 0
    if(!isNaN(seconds) && seconds > 0){
        await this.page.waitFor(seconds * 1000);
    } else {
        throw new Error(`Error: "${secondsStr}" is not a valid time to wait`);
    }
};