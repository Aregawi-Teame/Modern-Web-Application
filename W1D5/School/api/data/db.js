require("../models/student.model");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected",function(){
    console.log(process.env.MONGOOSE_CONNECTED_MESSAGE, process.env.DB_NAME);
});

mongoose.connection.on("disconnected", function(){
    console.log(process.env.MONGOOSE_DISCONNECTED_MESSAGE, process.env.DB_NAME);
});

mongoose.connection.on("error",function(err){
    console.log("Error " + err);
});

process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    })
});

process.once("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, "SIGUSR2");
    });
});