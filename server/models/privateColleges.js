const mongoose = require('mongoose');

const PrivateCollegesSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const PrivateColleges = mongoose.model('privateColleges', PrivateCollegesSchema);

module.exports = {PrivateColleges};