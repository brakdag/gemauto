const cron = require ("node-cron")
const gem = require("./gempad") 
const disp = require("./dispatch")
class Monitor {
constructor(user,pass){
    this.dispatch = new disp()
    this.user=user
    this.pass=pass
    this.g= new gem(this.user,this.pass);   
    this.start(x=>this.dispatch.process(x))
}

start(cb){
    let g = this.g
    this.mon = cron.schedule("30 * * * * *",function(){
        g.login(l=>{
            g.llamadof(x=>cb(x))
        })
    })
}
}

module.exports=Monitor