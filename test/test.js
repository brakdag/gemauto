const gem = require("../lib/gempad") 
const fcm = require("../lib/fcm")
const cred = require("../lib/credentials")

let credentials = new cred().get()

const g = new gem(credentials.gem.user,credentials.gem.pass);

describe("Testeando",function(){
it.only("Login",function (done){ 
        g.login(l=>{
            g.llamadod(x=>{
                g.llamado(y=>{
                    let m = x.concat(y)
                m=m.map(a=>[a.id*1,`${a.fecha_llamado} - ${a.lugar_trabajo}-${a.direccion}-${a.localidad}`])
                console.log(m)
                done()
                })
            })
        })
})

it("FCM",function(done){
    let  a = new fcm();
    a.send("prueba","gustavo",(x)=>{
        console.log(x)
        done();
    });
     
});

it("LLamado+notif",function (done){ 
    g.login(l=>{
        g.llamadof(x=>{
            let  a = new fcm();
            for(let g of x){
            a.send(g.lugar_trabajo,`${g.fecha_llamado} - ${g.lugar_trabajo}-${g.direccion}-${g.localidad}`,
            y=>{})        
        	}
	    done()
        });
    });
})







})
