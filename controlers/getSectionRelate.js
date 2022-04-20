const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");
router.get("/:id", async (req, res) => {
  const id = req.params?.id;
  if (id) {
    const data = await ZingMp3.getSectionRelate(id);
    res.json(data);
    return "";
  }
  res.json({ err: -1, mgs: "Incorect  Id" });
});
router.get("/", async (req, res) => {
  res.json({ data: { err: -11, msg: "Không Có id bài hát" } });
});
module.exports = router;
