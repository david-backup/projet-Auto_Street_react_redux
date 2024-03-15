const mongoose = require("mongoose");
const axios = require("axios");

// Charger les variables d'environnement si vous utilisez dotenv
require("dotenv").config();

// URI de connexion MongoDB
const mongoURI = process.env.MONGO_URI;

// Vérifier si l'URI de connexion MongoDB est définie
if (!mongoURI) {
  console.error("URI de connexion MongoDB non définie.");
  process.exit(1); // Arrêter le processus avec un code d'erreur
}

// Connexion à la base de données MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((error) => console.error("Erreur de connexion à MongoDB :", error));

// Modèle de schéma MongoDB pour stocker les données
const arrowSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  picture: { type: String, required: true },
});

const ArrowImg = mongoose.model("Arrow", arrowSchema);

const arrow = [
  {
    id: 0,
    picture: "../FrontEnd/src/assets/img/arrow_right.webp",
  },
  {
    id: 1,
    picture: "../FrontEnd/src/assets/img/arrow_left.webp",
  },
];

// Fonction pour enregistrer les catégories dans la base de données MongoDB
async function saveCategoriesToDB() {
  for (const item of arrow) {
    try {
      const newArrow = new ArrowImg(item);
      await newArrow.save();
      console.log("Catégorie enregistrée avec succès :", newArrow);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la catégorie :", error);
    }
  }
}

// Appel de la fonction pour enregistrer les catégories dans la base de données MongoDB
saveCategoriesToDB();
