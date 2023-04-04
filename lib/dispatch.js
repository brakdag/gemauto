const store = require("./store")
const fcm = require("./fcm")
const path = "./data/bucket.json"

class Dispatch{
    constructor(){
    this.store = new store(path)
    this.fcm = new fcm();
    }
    process(x){
        this.msg("Procesando")
        for(let a of x){
            if(!this.store.has(a.id)){
                this.store.push(a.id,true)
                this.notify(a)
                this.msg("Notificando:"+a)
            }
            else{
            this.msg("Sin novedad")
            }
        }
    }

    notify(a){
            let text = `${a.fecha_llamado}|${a.lugar_trabajo}|` +
            `${a.direccion}|${a.localidad}|ART:${a.articulo}`
            this.fcm.send(a.id,text,()=>{});
    }

    msg(a){
        let time= new Date().toLocaleString()
        console.log( `${time}/>${a}.`)
    }

}

module.exports=Dispatch

 