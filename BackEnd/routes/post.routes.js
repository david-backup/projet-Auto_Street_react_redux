const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

module.exports = router;
