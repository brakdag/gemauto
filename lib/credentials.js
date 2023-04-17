const fs = require('fs');
/**
 * @class Credentials
 */
class Credentials {
  /**
   * Creates an instance of Credentials.
   * @memberof Credentials
   */
  constructor() {
    this.path = `./credentials.json`;
    this.data = JSON.parse(fs.readFileSync(this.path));
  }
  /**
   * @return {Object} object with data.
   * @memberof Credentials
   */
  get() {
    return this.data;
  }
}

module.exports=Credentials;
