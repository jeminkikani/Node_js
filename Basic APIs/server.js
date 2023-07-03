const express = require('express')
const productrotes = require('../routers/product.routes')
const userrotes = require('../routers/users.routes')
const server = express()
const morgan = require('morgan');
const mongoose = require('mongoose')

mongoose.createConnection('mongodb://127.0.0.1:27017/man').then(()=>{
    console.log('db connected...')
}).catch((err)=>{
    console.log(err);     
})

server.use(express.json())
server.use(morgan('dev'));

server.use('/api/product',productrotes)
server.use('/api/user',userrotes);

server.listen(4500,()=>{
    console.log("server is started from localhost:4500")
})