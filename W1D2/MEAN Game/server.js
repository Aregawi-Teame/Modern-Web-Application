const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res)=>{
    res.status(200).redirect(303,"/");
});

app.use((req,res)=>{
    res.status(404).send('Sorry, cant find that');
})


const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
});