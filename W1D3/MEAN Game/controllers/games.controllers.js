const gamesData = require("../data/games.json");

module.exports.getAllGames = function(req, res){
    res.status(200).json(gamesData);
};

module.exports.getOneGame = function(req,res){
    let gameId = parseInt(req.params.gameId)
    res.status(200).json(gamesData[gameId]);
}