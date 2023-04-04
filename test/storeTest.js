const st = require("../lib/store")
const should = require("chai").should()
const path = "./data/bucket.json"

let store = new st(path)

describe("Store data",function(){
   
    it("loading data",function(){
        let data= store.getFullData()
        data.should.be.an("object")
    })

    it("Push pull data",function(){
        store.push("tryKEY","tryData");
    });

    it("has function return true",function(){
        store.has("tryKEY").should.to.equal(true);
    });

    it("has function return false",function(){
        store.has("kaka").should.to.equal(false);
    });

    

})