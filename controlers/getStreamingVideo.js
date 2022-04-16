const express = require('express');
const router = express.Router();
const SongSchema = require('../models/songSchema');
const ZingMp3 = require("zingmp3-api-full")
router.get('/:id',async(req,res) => {
    const id = req.params?.id
    if(id){
        const data = await ZingMp3.getVideo(id)
        if(data.err == 0 && data.msg === 'Success'){
            //const streamings = data.data.streaming?.map()
            if(!data.data.streaming.mp4){
                res.json(data)
                return ''
            }
            const sources =Object.keys(data.data.streaming.mp4).map (key => {
                return {
                        file:data.data.streaming.mp4[key],
                        label:key
                    }
                
            })
            const image = data.data.thumbnailM
            const result ={
                playlist: [{image,sources}]
            }
            res.json(result)
            return ''
        }
       
    }
    res.json({err:-1,mgs:'Incorect  id'})
})
    
module.exports = router 