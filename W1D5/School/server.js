require("dotenv").config();
const path = require("path");
const express = require("express");
const studentRoutes = require("./api/routes/student");
const courseRoutes = require("./api/routes/course");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});
app.use("/api", studentRoutes);
app.use("/api", courseRoutes);

const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
})



