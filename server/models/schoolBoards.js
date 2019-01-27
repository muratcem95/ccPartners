const mongoose = require('mongoose');

const SchoolBoardsSchema = new mongoose.Schema({
//    style: {
//        type: String,
//        required: true
//    }
});

const SchoolBoards = mongoose.model('schoolBoards', SchoolBoardsSchema);

module.exports = {SchoolBoards};