const http = require('http')
const server = http.createServer();
const product = require('./data.json')

// server.on('request',(req,res)=>{ 
//     if(req.url === '/admin')
//     {
//         res.end("admin in server");
//     }
//     else if(req.url === '/user')
//     {
//         res.end("user in server");
//     }
//     else if(req.url === '/login')
//     {
//         const data = JSON.stringify({id:1,name:'jemin',course:'backend devlopment'})
//         res.end(data);
//     }
// })

server.on('request',(req,res)=>{
        const items = req.url.split('/')
        if(items[1] === 'user')
        {
            res.end("you has live server in user page ")
        }
        else if(items[1] === 'admin')
        {
            res.end("you has live server in admin page ")
        }
        else if(items[1] === 'product')
        {
            if(items.length === 3)
            {
                const proid = items[2]
                res.end(JSON.stringify(product[proid]));
            }
            else
            {
                res.end(JSON.stringify(product));
            }
        }
})

server.listen(2000,()=>{
    console.log("server started in port http://localhost:2000");
})