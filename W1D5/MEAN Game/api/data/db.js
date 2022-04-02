const mongoose = require("mongoose");
require("./games-model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to ", process.env.DB_NAME);
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose Disconnected ");
});

mongoose.connection.on("Error",function(err){
    console.log("Error ",err);
});

process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    })
});

process.once("SIGUSR2",function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGINT2_MESSAGE);
        process.kill(process.pid, "SIGUSR2");
    })
})