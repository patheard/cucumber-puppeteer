const { setDefaultTimeout, setWorldConstructor } = require('cucumber');

class World {
  constructor() {
    this.page = null;
    this.browser = null;
  }
}

setDefaultTimeout(20 * 1000);
setWorldConstructor(World)
