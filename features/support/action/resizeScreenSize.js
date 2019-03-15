/**
 * Resize the screnn to a desired size.
 * @param {Number} width The desired width of the screen.
 * @param {Number} height The desired height of the screen.
 */
module.exports = async function(width, height) {

    try {
      //Set viewport to a given width and height
      await this.page.setViewport({width, height});

      await this.page.waitFor(1000);
      
    }catch (e){
      throw new Error(`Error: input is invalid`);
    }
};