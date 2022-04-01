const express = require("express");
const gamesController =require('../controllers/games.controllers');
const router = express.Router();

router.route("/games")
    .get(gamesController.getAllGames)
    .post(gamesController.addNewGame)
router.route("/game/:gameId")
    .get(gamesController.getOneGame)
    .delete(gamesController.deleteGame);

module.exports = router;