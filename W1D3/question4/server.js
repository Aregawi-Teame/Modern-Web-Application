require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require("./routes")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api", routes)

const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
});