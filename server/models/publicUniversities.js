const mongoose = require('mongoose');

const PublicUniversitiesSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const PublicUniversities = mongoose.model('publicUniversities', PublicUniversitiesSchema);

module.exports = {PublicUniversities};