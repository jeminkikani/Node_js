const http = require("http")
const port = 3500
const server = http.createServer((req,res)=>{
    res.write("server listen 3500");
    res.end();
});

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`wel come node.js ${port}`)
})

