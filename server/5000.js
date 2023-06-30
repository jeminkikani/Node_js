const http = require('http');
const port = 5000;
const server = http.createServer((req,res)=>{
    res.write("server listen 5000");
    res.end();
});

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`wel come node.js ${port}`)
})



