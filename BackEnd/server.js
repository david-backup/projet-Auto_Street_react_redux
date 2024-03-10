const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connection à la db
connectDB();

const app = express();

//Middleware qui permet de traiter les données de la "req"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/get", require("./routes/get.routes"));
app.use("/post", require("./routes/post.routes"));
app.use("/put", require("./routes/put.routes"));
app.use("/delete", require("./routes/delete.routes"));

// lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
