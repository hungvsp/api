const express = require('express');
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full")
router.get('/',async(req,res) => {
        const data = await ZingMp3.getNewReleaseChart()
        res.json({data})
})

module.exports = router