// const {addition,multiplication} = require('./lib.js');

// console.log(addition(2,5));

// console.log(multiplication(2,5));

const { isUtf8 } = require('buffer');
const fs = require('fs');

// fs.open('file.txt','w+',(err)=>{
//     if(err)
//     console.log(err)
//     console.log("file open succfully...");
// })

// fs.writeFile('file.txt','how can help you ?',(err)=>{
//     if(err)
//     console.log(err)
//     console.log("file is write mode....")
// })

// fs.appendFile('file.txt','you are a backEnd devloper',(err,data)=>{
//     if(err)
//     console.log(err)
//     console.log(data);
// })

fs.writeFile('abc.txt','how are you?',(err)=>{
    if(err)
    console.log(err)
    console.log("file is write Mode On....")
})

// fs.unlink('abc.txt',(err)=>{
//     if(err)
//     console.log(err)
//     console.log("file is deleted....");
// })



