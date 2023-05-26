const Store = require('./store');
const Fcm = require('./fcm');
const path = './data/bucket.json';
/**
 * @class Dispatch
 */
class Dispatch {
  /**
   * Creates an instance of Dispatch.
   * @memberof Dispatch
   */
  constructor() {
    this.store = new Store(path);
    this.fcm = new Fcm();
  }
  /**
   *
   *
   * @param {array} x
   * @memberof Dispatch
   */
  process(x) {
    this.msg('Procesando');
    for (const a of x) {
      if (!this.store.has(a.id)) {
        this.store.push(a.id, true);
        this.notify(a);
        this.msg('Notificando:'+JSON.stringify(a));
      } else {
        this.msg('Sin novedad');
      }
    }
  }

  /**
   *
   *
   * @param {Object} a
   * @memberof Dispatch
   */
  notify(a) {
    const text = `${a.fecha_llamado}|${a.lugar_trabajo}|` +
            `${a.direccion}|${a.localidad}|ART:${a.articulo}`;
    this.fcm.send(a.id, text, ()=>{});
  }

  /**
   *
   *
   * @param {string} a
   * @memberof Dispatch
   */
  msg(a) {
    const time= new Date().toLocaleString();
    console.log( `${time}/>${a}.`);
  }
}

module.exports=Dispatch;

