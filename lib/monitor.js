const cron = require ("node-cron")
const fcm = require("./fcm")
const gem = require("./gempad") 
const st = require("./store")
const path = "./data/bucket.json"
class MONITOR {

constructor(user,pass){
    this.store = new st(path)
    this.user=user
    this.pass=pass
    this.g= new gem(this.user,this.pass);   
    this.start(x=>this.dispatch(x))
    this.load = ""
}

start(cb){
    let t = this
    let g = this.g
    this.mon = cron.schedule("1 * * * * *",function(){
        g.login(l=>{
            g.llamado(x=>{
                t.setload(x)
                cb(x.map(a=>a.id))
            });
        });
    }); 
}

setload(x){
    this.load =x
}

dispatch(x){
    for(let a of x){
   if(!this.store.has(a)){
    this.store.push(a,true)
    this.notify(a)
    }else{
        console.log("Sin novedad")
    }
    }
}


notify(id){
    console.log("notificando")
    let  f = new fcm();
    for (let a of this.load){
    let text = `${a.fecha_llamado} - ${a.lugar_trabajo}-${a.direccion}-${a.localidad}-${a.articulo}`
    f.send(id,text,(g)=>{
    });
    }

}


}

module.exports=MONITOR