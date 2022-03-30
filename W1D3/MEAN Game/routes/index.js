const express = require("express");
const gamesController =require('../controllers/games.controllers');
const router = express.Router();

router.route("/games")
    .get(gamesController.getAllGames);
router.route("/game/:gameId")
    .get(gamesController.getOneGame);

module.exports = router;