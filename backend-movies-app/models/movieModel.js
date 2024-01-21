const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  poster: { type: String, required: true },
  // poster : lien vers le fichier ! 
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;
