const gem = require("../lib/index") 
const g = new gem(process.env.USER,process.env.PASS);

describe("Testeando",function(done2){
it("Login",function (done){ 
        g.login(l=>{
            g.llamado(x=>{
                console.log(x.length)
                console.log(x.map(a=>[a.id*1,`${a.fecha_llamado} - ${a.lugar_trabajo}-${a.direccion}-${a.localidad}`]))
                done()
            })
        })
})

})
