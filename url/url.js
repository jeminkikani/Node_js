const url = require('url')
const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
    const q = url.parse(req.url , true).query;
    console.log(q)
    if(q.uname === "jemin" && q.upassword === "kikani")
    {
        res.setHeader('content-type','text/html')
        res.write("<h1>login sucessfully</h1>");
    }
    else{
        res.write("login not");
    }
    res.end();
})

server.listen(5050,()=>{
    console.log("server listen port 5050");
})