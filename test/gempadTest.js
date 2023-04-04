const gem = require("../lib/gempad") 
const cred = require("../lib/credentials")

let credentials = new cred().get()

const g = new gem(credentials.gem.user,credentials.gem.pass);

describe("Testeando",function(){
it("Login",function (done){ 
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









})
