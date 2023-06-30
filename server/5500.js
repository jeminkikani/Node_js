const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("server listen 5500");
    res.end();
});

server.listen(5500,(err)=>{
    if(err) throw err
    console.log(`wel come node.js 5500`)
})



