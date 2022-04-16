const express = require('express');
const router = express.Router();
const SongSchema = require('../models/songSchema');
const ZingMp3 = require("zingmp3-api-full")
router.get('/:id',async(req,res) => {
    const id = req.params?.id
    if(id){
        const data = await ZingMp3.getArtist(id)
        res.json({data})
        return ''
    }
    res.json({err:-1,mgs:'Incorect  name'})
})
router.get('/',async(req,res) => {
    res.json(
        {"data":{"err":-1023,"msg":"Không tìm thấy ns này.",}})
})
module.exports = router