const cred = require("../lib/credentials")
const monitor = require("../lib/monitor")


let credentials = new cred().get()

let mon = new monitor(credentials.gem.user,credentials.gem.pass)


describe("Monitor Test",function(){
    it.only("Create monitor",function (done){ 
        let mon = new monitor(credentials.gem.user,credentials.gem.pass)
        done()
    })
})
