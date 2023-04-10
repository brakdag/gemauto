const gem = require("../lib/gempad") 
const cred = require("../lib/credentials")

let credentials = new cred().get()
const g = new gem(credentials.gem.user,credentials.gem.pass);

describe.only("Gempad test",function(){
    it("Login",function (done){ 
        g.login(l=>{
            console.log(l)
            done()
        })
    })
    it("escritorio",function (done){ 
            g.escritorio(l=>{
      //          console.log(l)
                done()
            })
    });

    it("llamado",function (done){ 
        g.llamado(l=>{
            console.log(l)
            done()})
    })

    it("llamados del día",function (done){ 
        g.llamadod(l=>{done()})
    })
    it("lamados de día y posteriores",function (done){ 
        g.llamadof(l=>{done()})
})





})
