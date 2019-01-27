const mongoose = require('mongoose');

const PrivateUniversitiesSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const PrivateUniversities = mongoose.model('privateUniversities', PrivateUniversitiesSchema);

module.exports = {PrivateUniversities};