const express = require("express");
const router = express.Router();

router.delete("/:id", (req, res) => {
  res.json({ message: "post supprimé id " + req.params.id });
});

module.exports = router;
