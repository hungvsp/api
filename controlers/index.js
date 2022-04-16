const express = require("express");
const router = express.Router();

const getHome = require("./getHome.js");
const getSong = require("./getSong.js");
const getDetailPlaylist = require("./getDetailPlaylist.js");
const getTop100 = require("./getTop100.js");
const getChartHome = require("./getChartHome.js");
const getNewReleaseChart = require("./getNewReleaseChart.js");
const getInfoSong = require("./getInfoSong.js");
const getArtist = require("./getArtist.js");
const getLyric = require("./getLyric.js");
const search = require("./search.js");
const getListMV = require("./getListMV.js");
const getCategoryMV = require("./getCategoryMV.js");
const getVideo = require("./getVideo.js");
const getStreamingVideo = require("./getStreamingVideo.js");
const testAPI = require("./testAPI.js");
const getBottomPlaylist = require("./getBottomPlaylist.js");
const getSongList = require("./getSongList.js");
const getHomeFull = require("./getHomeFull.js");
const getHotKey = require("./getHotKey.js");
const getSuggest = require("./getSuggest.js");
const getSectionRelate = require("./getSectionRelate.js");

router.use("/getHome", getHome);
router.use("/getHomeFull", getHomeFull);
router.use("/getHotKey", getHotKey);
router.use("/getSong", getSong);
router.use("/getDetailPlaylist", getDetailPlaylist);
router.use("/getTop100", getTop100);
router.use("/getChartHome", getChartHome);
router.use("/getNewReleaseChart", getNewReleaseChart);
router.use("/getInfoSong", getInfoSong);
router.use("/getArtist", getArtist);
router.use("/getLyric", getLyric);
router.use("/search", search);
router.use("/getStreamingVideo", getStreamingVideo);
router.use("/testAPI", testAPI);
router.use("/getListMV", getListMV);
router.use("/getBottomPlaylist", getBottomPlaylist);
router.use("/getCategoryMV", getCategoryMV);
router.use("/getVideo", getVideo);
router.use("/getSongList", getSongList);
router.use("/getSuggest", getSuggest);
router.use("/getSectionRelate", getSectionRelate);

module.exports = router;