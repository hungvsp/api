const express = require("express");
const router = express.Router();
const { formatTimeLrc } = require("../util/formatTimeLrc.js");
const ZingMp3 = require("zingmp3-api-full");

router.get("/:id", async (req, res) => {
  const id = req.params?.id;
  if (id) {
    const infoData = await ZingMp3.getInfoSong(id);
    const data = await ZingMp3.getSong(id);
    const dataLyric = await ZingMp3.getLyric(id);
    if (dataLyric?.err === 0 && dataLyric?.data?.sentences) {
      let lyricFotmat = dataLyric.data.sentences.map((item, i) => {
        const timeStartLrc = formatTimeLrc(item.words[0].startTime);
        const wordsArr = item.words.map((word) => word.data);
        return [timeStartLrc + wordsArr.join(` `)];
      });
      data.lyric = lyricFotmat.join("\n");
    }

    if (infoData?.err === 0 && infoData.data) {
      data.infoSong = infoData?.data;
    }

    res.json(data   );
    return "";
  }
  res.json({ err: -1, mgs: "Incorect  Id" });
});
router.get("/", async (req, res) => {
  res.json({ data: { err: -1023, msg: "Không tìm thấy bài hát này." } });
});
module.exports = router;
