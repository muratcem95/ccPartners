const mongoose = require('mongoose');

const SummerOptionsSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const SummerOptions = mongoose.model('summerOptions', SummerOptionsSchema);

module.exports = {SummerOptions};