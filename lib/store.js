const fs = require('fs');

/**
 *
 *
 * @class Store
 */
class Store {
  constructor(path, section) {
    this.path= path;
    this.data = JSON.parse(fs.readFileSync(path));
  }

  /**
   *
   *
   * @return
   * @memberof Store
   */
  save() {
    return fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  /**
   *
   *
   * @return
   * @memberof Store
   */
  reset() {
    this.data={'keyTRY': true};
    this.save();
    return true;
  }

  /**
   *
   *
   * @return
   * @memberof Store
   */
  getFullData() {
    return this.data;
  }

  /**
   *
   *
   * @param {*} key
   * @param {*} data
   * @return
   * @memberof Store
   */
  push(key, data) {
    this.data[key]=data;
    this.save();
    return true;
  }

  /**
   *
   *
   * @param {*} key
   * @return
   * @memberof Store
   */
  has(key) {
    for (const k in this.data) {
      if (k == key) return true;
    }
    return false;
  }
}

module.exports=Store;
