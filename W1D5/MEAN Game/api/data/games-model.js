const mongoose = require("mongoose");

const PublisherSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    country: String,
    established: Number
});

const ReviewSchema  = mongoose.Schema({
          title: {
              type: String,
              required: true
          },
          rating: {
              type: Number,
              required: true
          },
          review: {
              type: String,
              required: true
          },
          postDate: {
              type: Date,
              default: Date.now
          }
})

const GamesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    price: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    minAge: Number,
    publisher: PublisherSchema,
    reviews: [{ReviewSchema}],
    designers: [ String ]
});

mongoose.model("Game", GamesSchema, "games"); // compiling the model
