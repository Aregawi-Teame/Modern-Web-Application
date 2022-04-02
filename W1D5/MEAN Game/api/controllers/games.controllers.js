const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL)

module.exports.getAllGames = function(req, res){
    console.log("GetALLGames controller colled");
    // const gamesCollection = getCollection("games")
    let count = 3;
    let offset = 0;

    console.log(req.query.count)
    if(req.query && req.query.count){
        const c = parseInt(req.query.count,10)
        count = c>10 ?10 : c<1?count:c
    }
    if(req.query && req.query.offset){
        const c = parseInt(req.query.count,10)
        offset = parseInt(req.query.offset,10)
    }
     Game.find().skip(offset).limit(count).exec((err,games)=>{
        console.log("Found games",games);
        res.status(200).json(games);
    })

};

module.exports.getOneGame = function(req,res){
    let gameId = req.params.gameId
    Game.findOne({_id:ObjectId(gameId)},(err,game)=>{
        res.status(200).json(game);
    });
}

module.exports.addNewGame = function(req,res){
    if(req.body){
         const newGame ={};
         newGame.title = req.body.title;
         newGame.price = parseFloat(req.body.price);
         newGame.minPlayers = parseInt(req.body.minPlayers);
         newGame.minAge = parseInt(req.body.minAge);
        
        if(newGame.minAge<6 || newGame.minAge>99){
            res.status(400).json({error: "minAge must be between 6 and 69"});
        }
        if(newGame.minPlayers<1 || newGame.minPlayers>11){
            res.status(400).json({error: "Minplayers must be between 1 and 11"});
        }
       else{
        Game.insertMany([newGame],function(err, savedGame){
            if(err){
                res.status(500).json({error:"Your data is not saved. Please try again "})
            }
            else{
                res.status(201).json(savedGame);
            }
        });
       }
    }
};

module.exports.deleteGame = function(req,res){
    let gameId = req.params.gameId;
    Game.deleteOne({_id:ObjectId(gameId)},(err,response)=>{
        if(err){
            res.status(500).json({error:"Your data is not deleted. Please try again "})
        }else{
            res.status(200).json({Message: "Successfully deleted"});
        }
    });
}