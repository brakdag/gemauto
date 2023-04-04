const fcm = require("../lib/fcm")
describe.only("Testeando FCM",function(){

it("FCM",function(done){
    let  a = new fcm();
    a.send("prueba","gustavo",(x)=>{
        console.log(x)
        done();
    });
     
});

});