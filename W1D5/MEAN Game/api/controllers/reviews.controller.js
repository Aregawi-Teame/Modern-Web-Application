const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId
const Game = mongoose.model(process.env.GAME_MODEL);

const getAllReviews = function(req, res){
    console.log("GetAll Reviews controller called")
        const gameId = req.params.gameId;
        Game.findById(gameId).select("reviews").exec(function(err, game){
            if(err){
                console.log("Error "+ err);
                res.status(500).json({Error: err});
            } else{
                res.status(200).json(game.reviews);
            }
        })
};

const getOneReviewOfGame = function(req, res){
    console.log("GetOneReviews of a game controller called");
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    Game.findById(gameId).select("reviews").exec(function(err, game){
        if(err){
            console.log("Error "+ err);
            res.status(500).json({Error: err});
        } else{
            res.status(200).json(game.reviews.id(reviewId));
        }
    })
}

module.exports = {
    getAllReviews,
    getOneReviewOfGame
}