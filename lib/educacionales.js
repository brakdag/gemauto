const axios = require('axios');

class Educ{
    
    static urlBase = `https://educacionales.mendoza.edu.ar/`;
    
    constructor(cb){
        this.data=""
        this.getData(x=>{
            this.data=x.data
            cb(x)
        })
    }

    getData(cb){
        axios.get(Educ.urlBase,res=>{
        cb(res)
        });
    }

}
module.exports = Educ