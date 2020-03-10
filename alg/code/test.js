const OS = require('os') 
const Http = require('http')

let cpu = (OS.freemem() / OS.totalmem()) * 100

Http.createServer((req, res) => {
    res.end('test server')
})
  
Http.listen('9999', '0.0.0.0', data => {
    console.log(data);
})



