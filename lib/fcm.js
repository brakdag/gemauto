const axios = require("axios")
const cred = require("./credentials")
let credentials = (new cred()).get()

class FCM {
static url="https://fcm.googleapis.com/fcm/send"
static auth=credentials.fcm.auth
constructor(){

}

send(titulo,texto,cb){

    let form = {
    "to":credentials.fcm.tokens[0],
    "time_to_live":60,
    "priority":"high",
    "data":{
    text:{
            title:titulo,
            message:texto,
            clipboard:true
        }
    }
    }
    axios.post(FCM.url,form,{headers:{Authorization:FCM.auth}}).then((x)=>{cb(x.data)})

}

}

module.exports=FCM