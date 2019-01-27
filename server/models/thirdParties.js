const mongoose = require('mongoose');

const ThirdPartiesSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const ThirdParties = mongoose.model('thirdParties', ThirdPartiesSchema);

module.exports = {ThirdParties};