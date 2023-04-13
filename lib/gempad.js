//probando escribir
const axios = require("axios")
const fs = require("fs")
class GEM {
    static urlBase = `https://dti.mendoza.edu.ar/`
    static urlLogin = `gem/usuarios/auth_login/login`
    static urlEscritorio = `gem/pad/escritorio/`
    static pllamado = `gem/pad/docente/llamados_proximos_data`
    static pllamadod = `gem/pad/docente/llamados_dia_data/71297`
    static loginredirect = '0;url=https://dti.mendoza.edu.ar/gem/escritorio'
    constructor(user,pass){
        this.debug=process.env.DEBUG?true:false;
        this.identity=user
        this.password=pass
        this.cookie = ""
        this.inicialflt = fs.readFileSync("data/inicial.json")
        this.instance = axios.create({
            withCredentials: true,
            baseURL: GEM.urlBase
          });
          
    }


    login(cb){
       let form = {"identity": this.identity,"password":this.password, 
                 "redirect_url": "escritorio","submit": "Ingresar"}
                
     this.instance.post(GEM.urlLogin,form,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'
      },  followRedirect: true, withCredentials: true }).then((res)=>{
        if(this.debug) console.log(res)
        let logueado = (res.data.length==0) && (res.headers.refresh==GEM.loginredirect) 
        if(logueado) this.cookie=res.headers["set-cookie"][0]
        cb(logueado)
    }).catch(err=>{console.log(`Ocurrió un error en el logueo ${err}`)})
}     
    


    escritorio(cb){
        if(this.debug) console.log(this.cookie)
        this.instance.get(GEM.urlEscritorio,{},{headers:{"Cookie":this.cookie}}).then(res=>cb(res));
    }

llamado(cb){
   this.send(GEM.pllamado,this.inicialflt,x=>cb(x))
}

llamadod(cb){
    this.send(GEM.pllamadod,this.inicialflt,x=>cb(x))
}

llamadof (cb){
    this.llamado(x=>{
        this.llamadod(y=>{
            cb(x.concat(y))
        })
    })
}

send(url,form,cb){
    let gem = this
        this.instance.post(url,form,{headers:{Cookie:gem.cookie}}).then(s=>{
        if(this.debug) console.log(s)
            cb(s.data.data)
    }).catch(err=>{
        console.log("ocurrió un error en llamado...intentando nuevamente.")
        gem.login(x=>console.log("logueado nuevamente."))
        setTimeout(function(){gem.send(url,form,x=>cb(x))},5000)
})
}

}
module.exports = GEM;