const http = require('http')
const port = 3000;
const server = http.createServer((req,res)=>{
    res.write("server listen 3000");
    res.end();
});

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`wel come node.js ${port}`)
})

