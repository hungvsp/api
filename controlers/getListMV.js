const express = require('express');
const router = express.Router();
const SongSchema = require('../models/songSchema');
const ZingMp3 = require("zingmp3-api-full")
router.get('/:keySearch',async(req,res) => {
    const keySearch = req.params?.keySearch
    if(keySearch){
        const data = await ZingMp3.getArtist(keySearch)
        res.json({data})
        return ''
    }
    res.json({err:-1,mgs:'Incorect  keySearch'})
})
  
module.exports = router