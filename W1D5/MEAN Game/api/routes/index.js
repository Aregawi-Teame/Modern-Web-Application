const express = require("express");
const gamesController =require('../controllers/games.controllers');
const publisherController = require("../controllers/publisher.controller");
const reviewsController = require("../controllers/reviews.controller");
const router = express.Router();


router.route("/games/:gameId")
    .get(gamesController.getOneGame)
    .delete(gamesController.deleteGame);
router.route("/games")
    .get(gamesController.getAllGames)
    .post(gamesController.addNewGame)
router.route("/games/:gameId/publisher")
    .get(publisherController.getOne);
router.route("/games/:gameId/reviews")
    .get(reviewsController.getAllReviews);
router.route("/games/:gameId/reviews/:reviewId")
    .get(reviewsController.getOneReviewOfGame);

module.exports = router;