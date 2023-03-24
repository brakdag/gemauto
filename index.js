const cron = require ("node-cron")
const gem = require("./lib/index") 
const fcm = require("./lib/fcm")
const cred = require("./lib/credentials")

let credentials = new cred().get()
let g = new gem(credentials.gem.user,credentials.gem.pass);

let task = cron.schedule("* 20 * * *",function(){
    g.login(l=>{
        g.llamado(x=>{
            let  a = new fcm();
            for(let g of x){
            a.send(g.lugar_trabajo,`${g.fecha_llamado} - ${g.lugar_trabajo}-${g.direccion}-${g.localidad}`,(y)=>{})        
            }
        });
    });
});

task.start();