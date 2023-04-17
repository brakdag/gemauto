const Cred = require('./lib/credentials');
const Monitor = require('./lib/monitor');
const express = require('express');

const credentials = new Cred().get();
const mon = new Monitor(credentials.gem.user, credentials.gem.pass);

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor gemauto funcionando');
});

app.get('/exit', (req, res) => {
  mon.exit((x)=>{
    res.send('exit');
  });
});


app.listen(8000, () => {
  console.log('Servidor gemauto en 8000');
});


