const cron = require ("node-cron")
const gem = require("./lib/index") 
const fcm = require("./lib/fcm")
const cred = require("./lib/credentials")

const monitor = require("./lib/monitor")




let credentials = new cred().get()


let mon = new monitor(credentials.gem.user,credentials.gem.pass)


let g = new gem(credentials.gem.user,credentials.gem.pass);

let task = cron.schedule("15 20 * * *",function(){
    g.login(l=>{
        g.llamado(x=>{
            let  a = new fcm();
            for(let g of x){
            a.send(g.lugar_trabajo,`${g.fecha_llamado} - ${g.lugar_trabajo}-${g.direccion}-${g.localidad}`,(y)=>{})        
            }
        });
    });
});



let monitor = cron.schedule("1 * * * * *",function(){
    g.login(l=>{
        g.llamado(x=>{
            console.log(new Date(),x.map(a=>a.id))
        });
    });
}); 






monitor.start();