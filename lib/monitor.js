const cron = require ("node-cron")
const gem = require("./lib/index") 
const fcm = require("./lib/fcm")

class MONITOR {

constructor(user,pass){
    this.user=user
    this.pass=pass
    this.g= new gem(this.user,this.pass);   
    this.start(x=>this.dispatch(x))
}

start(cb){
    let g = this.g
    this.mon = cron.schedule("1 * * * * *",function(){
        g.login(l=>{
            g.llamado(x=>{
                cb(x.map(a=>a.id))
            });
        });
    }); 
}

dispatch(x){
    console.log(x)
}


}

module.exports=MONITOR