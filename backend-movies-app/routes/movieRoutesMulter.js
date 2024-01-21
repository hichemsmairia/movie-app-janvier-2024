const express = require("express");
const router = express.Router();
const movieModel = require("../models/movieModel");
const upload = require('../middleware/multer-config.js')




/*

app.use(middleware)

router.get('/list',middelware1,middleware2,(req,res)=>{

})

*/


//un champ de form data appelé "image"
router.post("/add_movie", upload, (req, res) => {
  console.log(req.body);

  let newMovie = new movieModel({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    poster: `/images/${req.file.filename}`, // sauvgarder le chemin d'image
  });

  newMovie.save();

  res.json({ message: "Movie added successfully" });
});

router.get("/get_all", async (req, res) => {
  let result = await movieModel.find({});
  res.json(result);
});

module.exports = router;


