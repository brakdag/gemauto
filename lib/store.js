const fs = require("fs")

class Store{
    
constructor(path,section){
    this.path= path
    this.data = JSON.parse(fs.readFileSync(path))
}

save(){
  return fs.writeFileSync(this.path,JSON.stringify(this.data))
}

getFullData(){
return this.data
}

push(key,data){
this.data[key]=data
this.save()
return true
}

has(key){
for(let k in this.data){
 if (k == key) return true
}
return false
}





}

module.exports=Store