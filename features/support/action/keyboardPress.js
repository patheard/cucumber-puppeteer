/**
 * Presses a key on the keyboard
 * @param {String} key The key to press
 */
module.exports = async function(key) {
    await this.page.keyboard.press(key);
};