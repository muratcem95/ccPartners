const mongoose = require('mongoose');

const PublicCollegesSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const PublicColleges = mongoose.model('publicColleges', PublicCollegesSchema);

module.exports = {PublicColleges};