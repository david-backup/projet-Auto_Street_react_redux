const express = require("express");
const router = express.Router();

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

module.exports = router;
