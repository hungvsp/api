const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");
router.get("/:query", async (req, res) => {
  const query = req.params?.query;
  const data = await ZingMp3.getSuggest(query);
  res.json({ data });
});

module.exports = router;
