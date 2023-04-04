const store = require("./store")
const fcm = require("./fcm")
const path = "./data/bucket.json"

class Dispatch{
    constructor(){
    this.store = new store(path)
    this.fcm = new fcm();
    }
    process(x){
        for(let a of x){
            if(!this.store.has(a.id)){
                this.store.push(a.id,true)
                this.notify(a)}
            else{
            console.log("Sin novedad")
            }
        }
    }

    notify(a){
            let text = `${a.fecha_llamado}|${a.lugar_trabajo}|` +
            `${a.direccion}|${a.localidad}|ART:${a.articulo}`
            this.fcm.send(a.id,text,()=>{});
        }

}

module.exports=Dispatch

 