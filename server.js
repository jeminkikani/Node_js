const express = require('express');
const app = express();
const port = 8989;

app.get('/', (req,res)=>{
    res.json("Wel Come TO E-commarce App");
})

app.listen(port,()=>{
    console.log(`server started  ${port}`);
})