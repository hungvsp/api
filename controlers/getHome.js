const express = require("express");
const router = express.Router();
const SongSchema = require("./../models/songSchema");
const ZingMp3 = require("zingmp3-api-full");
router.get("/:page", async (req, res) => {
  const page = req.params?.page;
  const count = "30";
  const data = await ZingMp3.getHome(page, count);
  res.json(data);
});
module.exports = router;
