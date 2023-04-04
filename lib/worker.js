const store = require("./store")
const fcm = require("./fcm")
const path = "./data/bucket.json"

class Dispatch{
    constructor(){
    this.store = new store(path)
    this.store.reset()
    }
    process(x){
        console.log(x)
    }
}

module.exports=Dispatch

    /*for(let a of x){
            if(!this.store.has(a)){
        this.store.push(a,true)
        this.notify(a)
        }else{
            console.log("Sin novedad")
        }
        }*/

            /*notify(id){
        console.log("notificando")
        let  f = new fcm();
        for (let a of this.load){
        let text = `${a.fecha_llamado} - ${a.lugar_trabajo}-${a.direccion}-${a.localidad}-${a.articulo}`
        f.send(id,text,(g)=>{
        });
        }}*/
