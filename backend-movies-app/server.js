const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moviesRoutes = require("./routes/movieRoutesMulter");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/movies/", moviesRoutes);
app.use("/api/auth", authRoutes);
//connection a la base de donnees  !

// get post put delete

mongoose
  .connect(
    "mongodb+srv://hichem123:hichem123@cluster0.cv5kb42.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("erreur lors de la connection au database");
  });

app.listen(5000, () => {
  console.log("serveur en marche");
});
