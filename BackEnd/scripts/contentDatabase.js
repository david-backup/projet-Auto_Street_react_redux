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
const categorieSchema = new mongoose.Schema({
  id: Number,
  name: String,
  prix: String,
  description: String,
  année: String,
  cover: String,
  pictures: [String],
});

const Categorie = mongoose.model("Categorie", categorieSchema);

const categories = [
  {
    id: 1,
    name: "peugeot 206 hdi",
    prix: "5500 €",
    description: "Véhicule avec courroie de distribution faite à 80000km",
    année: "janvier 2010",
    cover: "./FrontEnd/src/assets/img/moteur_1.jpg",
    pictures: [
      "./FrontEnd/src/assets/img/moteur_2.jpg",
      "./FrontEnd/src/assets/img/moteur_3.jpg",
      "./FrontEnd/src/assets/img/moteur_4.jpg",
    ],
  },
  {
    id: 2,
    name: "Carosserie",
  },
];

// Fonction pour enregistrer les catégories dans la base de données MongoDB
async function saveCategoriesToDB() {
  for (const categorie of categories) {
    try {
      const newCategorie = new Categorie(categorie);
      await newCategorie.save();
      console.log("Catégorie enregistrée avec succès :", newCategorie);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la catégorie :", error);
    }
  }
}

// Appel de la fonction pour enregistrer les catégories dans la base de données MongoDB
saveCategoriesToDB();
