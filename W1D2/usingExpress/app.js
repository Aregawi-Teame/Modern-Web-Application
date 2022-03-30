const path = require('path');
const express = require('express');
require('dotenv').config();
const app = express();
app.get('/page1.html',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public", "page1.html"));
});
app.get('/page2.html',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public", "page2.html"));
})
app.post('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"file.json"));
});
app.use((req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"public", "index.html"));
})
const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
});

