const mongoose  = require('mongoose'); 
const songSchema = new mongoose.Schema({
    title: String ,
    img:String ,
    in_singer: String ,
    slug:String ,
    id:String
})
module.exports = mongoose.model('song', songSchema);