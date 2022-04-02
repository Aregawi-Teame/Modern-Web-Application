const mongoose = require("mongoose")

const Game = mongoose.model(process.env.GAME_MODEL);

const getOne = function(req, res){
    console.log("GetOne publisher controller");
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec((err, game)=>{
        if(err){
            res.status(500).json({error: err})
        } else{
            console.log(game)
            res.status(200).json(game.publisher)
        }
    })
};

module.exports = {getOne};

