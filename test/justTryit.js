const cred = require("../lib/credentials")
const gem = require("../lib/gempad") 
const disp = require("../lib/dispatch")

let credentials = new cred().get()
let d = new disp();
const g = new gem(credentials.gem.user,credentials.gem.pass);

describe.only("Testeando",function(){
    it("LLamado+notif",function (done){ 
        g.login(l=>{
            g.llamadof(x=>{
                d.process(x)                
            });
        });
    })
})