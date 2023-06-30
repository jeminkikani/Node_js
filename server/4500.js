const http = require('http');
const port = 4500;
const server = http.createServer((req,res)=>{
    res.write("server listen 4500");
    res.end();
});

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`wel come node.js ${port}`)
})



