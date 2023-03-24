const cron = require ("node-cron")

let task = cron.schedule("* * * * *",function(){
    console.log(`probando: ${new Date()}`)
});

task.start();