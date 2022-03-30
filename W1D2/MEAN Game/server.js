require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, "public")));




const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
});