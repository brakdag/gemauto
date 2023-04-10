const cred = require("./lib/credentials")
const monitor = require("./lib/monitor")
const express = require('express')

let credentials = new cred().get()
let mon = new monitor(credentials.gem.user,credentials.gem.pass)
  
const app = express()

app.get('/', (req, res) => {
  res.send('Servidor gemauto funcionando')
})

app.listen(8080, () => {
  console.log('Servidor gemauto en 8000')
})


