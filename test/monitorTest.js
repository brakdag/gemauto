const cred = require("../lib/credentials")
const monitor = require("../lib/monitor")


let mon 
let credentials

describe("Monitor Test",function(){
it("loading credentials", function(){
     credentials = new cred().get()
})

it("create monitor",function(){
     mon = new monitor(credentials.gem.user,credentials.gem.pass)
})

})
