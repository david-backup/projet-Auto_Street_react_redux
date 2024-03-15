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
const sliderSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
});

const slider = mongoose.model("slider", sliderSchema);

const slides = [
  {
    id: 0,
    title: "Garage Auto Street",
    description: "Contactez-nous: 04.75.60.76.27",
    picture: "../FrontEnd/src/assets/img/banner1.webp",
  },
  {
    id: 1,
    title: "Mécanique générale",
    description: "et entretiens",
    picture: "../FrontEnd/src/assets/img/banner2.webp",
  },
  {
    id: 2,
    title: "Montage pneus",
    description: "neufs et occasions",
    picture: "../FrontEnd/src/assets/img/banner3.webp",
  },
  {
    id: 3,
    title: "Atelier de carosserie",
    description: "réparations ou mise à neuf",
    picture: "../FrontEnd/src/assets/img/banner4.webp",
  },
];

// Fonction pour enregistrer les catégories dans la base de données MongoDB
async function saveCategoriesToDB() {
  for (const slide of slides) {
    try {
      const newSlide = new slider(slide);
      await newSlide.save();
      console.log("Catégorie enregistrée avec succès :", newSlide);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la catégorie :", error);
    }
  }
}

// Appel de la fonction pour enregistrer les catégories dans la base de données MongoDB
saveCategoriesToDB();
