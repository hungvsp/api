const express = require('express');
const {formatTimeLrc} = require('../util/formatTimeLrc.js')
const router = express.Router();
const SongSchema = require('../models/songSchema');
const ZingMp3 = require("zingmp3-api-full")
router.get('/:id',async(req,res) => {
    const id = req.params?.id
    if(id){
        const data = await ZingMp3.getLyric(id)
        if(data.err === 0 && data?.data?.sentences ) {

            let  lyricFotmat = data.data.sentences.map((item,i)=>{
                    const timeStartLrc = formatTimeLrc(item.words[0].startTime)
                    const timeEndLrc = formatTimeLrc(item.words.slice(-1)[0].endTime)
                    const wordsArr = item.words.map((word)=>word.data)
                    return [timeStartLrc+timeEndLrc +wordsArr.join(' ')]
                })
           res.json({err:data.err ,msg:'Success',data:data.data.sentences,lyricFotmat:lyricFotmat.join(' ')})
        }
        else if(data.err === -108) res.json({err:data.err ,msg:'Not found id',})
        else   res.json({msg:'Chưa cập nhật',err:404,msg:'Lyric not fuond'})
        return ''
    }
    res.json({err:-1,mgs:'Incorect  Id'})
})
router.get('/',async(req,res) => {
    res.json(
        {"data":{"err":-1023,"msg":"Không tìm thấy bài hát này.",}})
})
module.exports = router