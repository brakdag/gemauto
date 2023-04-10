const cred = require("../lib/credentials")
const gem = require("../lib/gempad") 
const dis = require("../lib/dispatch")

let credentials = new cred().get()
let d = new dis();
const g = new gem(credentials.gem.user,credentials.gem.pass);

describe("Testeando",function(){
  it("LLamado+notif",function (done){ 
        g.login(l=>{
            g.llamadof(x=>{
                d.process(x)  
                done()              
            });
        });
    })
})

