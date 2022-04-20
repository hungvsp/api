const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");
router.get("/:id", async (req, res) => {
  const id = req.params?.id;
  const data = await ZingMp3.getInfoSong(id);
  res.json(data);
});

module.exports = router;
            