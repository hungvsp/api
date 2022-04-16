const mongoose = require('mongoose');

async function  connect () {
    await mongoose.connect('mongodb+srv://phamhung:ngaymaise@cluster0.7rczh.mongodb.net/apiNhac?retryWrites=true&w=majority')
}

module.exports = connect