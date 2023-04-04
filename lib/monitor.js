const cron = require ("node-cron")
const gem = require("./gempad") 
const disp = require("./dispatch")
class MONITOR {

constructor(user,pass){
    this.dispatch = new disp()
    this.user=user
    this.pass=pass
    this.g= new gem(this.user,this.pass);   
    this.start(x=>this.dispatch.process(x))
    this.load = ""
}

start(cb){
    let t = this
    let g = this.g
    this.mon = cron.schedule("1 * * * * *",function(){
        g.login(l=>{
            g.llamado(x=>cb(x))
        })
    })
}
}

module.exports=MONITOR