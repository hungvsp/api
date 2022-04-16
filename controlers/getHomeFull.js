const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");
router.get("/", async (req, res) => {
  const dataHome1 = await ZingMp3.getHome(1);
  const dataHome2 = await ZingMp3.getHome(2);
  const dataHome3 = await ZingMp3.getHome(3);
  const dataHome4 = await ZingMp3.getHome(4);
  const dataBack = [];
  if (dataHome1 && dataHome1.err === 0) dataBack.push(...dataHome1.data.items);
  if (dataHome2 && dataHome2.err === 0) dataBack.push(...dataHome2.data.items);
  if (dataHome2 && dataHome3.err === 0) dataBack.push(...dataHome3.data.items);
  if (dataHome4 && dataHome4.err === 0) dataBack.push(...dataHome4.data.items);
  res.json(dataBack);
});
module.exports = router;
