const cred = require("../lib/credentials")
const monitor = require("../lib/monitor")

let credentials = new cred().get()
let mon = new monitor(credentials.gem.user,credentials.gem.pass)
