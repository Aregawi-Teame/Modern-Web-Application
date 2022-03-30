require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", routes);

const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MESSAGE} http://${process.env.HOST}:${server.address().port}`);
})