const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "voici les données" });
});

module.exports = router;
