const express = require('express');
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full")
router.get('/',async(req,res) => {
        const data = await ZingMp3.getChartHome()
        res.json({data})
})

module.exports = router