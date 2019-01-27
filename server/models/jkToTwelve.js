const mongoose = require('mongoose');

const JkToTwelveSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const JkToTwelve = mongoose.model('jkToTwelve', JkToTwelveSchema);

module.exports = {JkToTwelve};