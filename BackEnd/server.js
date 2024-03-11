const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connection à la db
connectDB();

const app = express();

// middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancer le serveur
app.listen(port, () => console.log("le big data a démarré au port " + port));
