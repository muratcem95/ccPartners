const mongoose = require('mongoose');

const LanguageSchoolsSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const LanguageSchools = mongoose.model('languageSchools', LanguageSchoolsSchema);

module.exports = {LanguageSchools};