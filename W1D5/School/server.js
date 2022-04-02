require("dotenv").config();
require("./api/data/db");
const express = require("express");
const routes = require("./api/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});
app.use("/api", routes);

const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
})



