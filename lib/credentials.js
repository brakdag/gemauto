const fs = require("fs")

class Credentials{
    constructor(){
        this.path = `./credentials.json`
        this.data =  JSON.parse(fs.readFileSync(this.path))
    }

    get(){
        return this.data
    }
}

module.exports=Credentials