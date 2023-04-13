const cred = require("../lib/credentials")
const gem = require("../lib/gempad") 
const dis = require("../lib/dispatch")

let credentials = new cred().get()
let d = new dis();
const g = new gem(credentials.gem.user,credentials.gem.pass);

describe.only("JustTryIt",function(){
  it("Login Llamado",function (done){ 
        g.login(l=>{
            g.llamadof(x=>{
                console.log(x.length)  
                done()              
            });
        });
    })
})

