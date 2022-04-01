const dbconnection = require("../data/dbconnection");
const ObjectId = require("mongodb").ObjectId;

const getCollection = function(collectionName){
    const db = dbconnection.get();
    return db.collection(collectionName);
}

module.exports.getAllGames = function(req, res){
    console.log("GetALLGames controller colled");
    const gamesCollection = getCollection("games")
    let count = 3;
    console.log(req.query.count)
    if(req.query && req.query.count){
        const c = parseInt(req.query.count,10)
        count = c>10 ?10 : c<1?count:c
    }
    gamesCollection.find().limit(count).toArray((err,games)=>{
        console.log("Found games",games);
        res.status(200).json(games);
    })

};

module.exports.getOneGame = function(req,res){
    let gameId = req.params.gameId
    const gamesCollection = getCollection("games");
    gamesCollection.findOne({_id:ObjectId(gameId)},(err,game)=>{
        res.status(200).json(game);
    });
}

module.exports.addNewGame = function(req,res){
    if(req.body){
        const title = req.body.title;
        const price = parseFloat(req.body.price);
        const minPlayers = parseInt(req.body.minPlayers);
        const minAge = parseInt(req.body.minAge);
        const newGame ={title:title,price:price,minPlayers:minPlayers,minAge:minAge};
        const gamesCollection = getCollection("games");
        
        if(minAge<6 || minAge>69){
            res.status(400).json({error: "minAge must be between 6 and 69"});
        }
        if(minPlayers<1 || minPlayers>11){
            res.status(400).json({error: "Minplayers must be between 1 and 11"});
        }
       else{
        gamesCollection.insertOne(newGame,function(err, savedGame){
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
    let gameId = req.params.gameId
    const gamesCollection = getCollection("games");
    gamesCollection.deleteOne({_id:ObjectId(gameId)},(err,response)=>{
        if(err){
            res.status(500).json({error:"Your data is not deleted. Please try again "})
        }else{
            res.status(200).json({Message: "Successfully deleted"});
        }
    });
}