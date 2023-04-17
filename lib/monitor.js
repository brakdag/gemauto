const cron = require('node-cron');
const Gem = require('./gempad');
const Disp = require('./dispatch');

/**
 *
 *
 * @class Monitor
 */
class Monitor {
  /**
   * Creates an instance of Monitor.
   * @param {*} user
   * @param {*} pass
   * @memberof Monitor
   */
  constructor(user, pass) {
    this.program= process.env.TIME ?
    `0 ${process.env.TIME} * * * *` :'0 20 * * * *';
    this.dispatch = new Disp();
    this.user=user;
    this.pass=pass;
    this.g= new Gem(this.user, this.pass);
    this.start((x)=>this.dispatch.process(x));
  }

  /**
   *
   *
   * @param {*} cb
   * @memberof Monitor
   */
  start(cb) {
    const g = this.g;
    // monitor                s/m/h/d/mo/w
    console.log(`#configuración timer:${this.program}`);
    this.mon = cron.schedule(this.program, function() {
      g.login((l)=>{
        g.llamadof((x)=>cb(x));
      });
    });
  }

  /**
   *
   *
   * @param {*} cb
   * @memberof Monitor
   */
  exit(cb) {
    this.mon.exit((x)=>cb(x));
  }
}

module.exports=Monitor;
