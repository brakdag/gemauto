const axios = require('axios');
const Cred = require('./credentials');
const credentials = (new Cred()).get();

/**
 *
 *
 * @class FCM
 */
class FCM {
  static url='https://fcm.googleapis.com/fcm/send';
  static auth=credentials.fcm.auth;

  /**
   * Creates an instance of FCM.
   * @memberof FCM
   */
  constructor() {

  }

  /**
   *
   *
   * @param {*} titulo
   * @param {*} texto
   * @param {*} cb
   * @memberof FCM
   */
  send(titulo, texto, cb) {
    if (this.debug) console.log('notificando');
    const form = {
      'to': credentials.fcm.tokens[0],
      'time_to_live': 60,
      'priority': 'high',
      'data': {
        text: {
          title: titulo,
          message: texto,
          clipboard: true,
        },
      },
    };
    axios.post(FCM.url, form, {headers: {Authorization: FCM.auth}}).then((x)=>{
      cb(x.data);
    });
  }
}

module.exports=FCM;
