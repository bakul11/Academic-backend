const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    discription: {
        type: String,
        required: true,
        trim: true,
    },
    userPhoto: {
        type: String,
        default: ""
    },
    postId: {
        type: String,
        default: ""
    }
})

const reviewDB = mongoose.model('review', reviewSchema);
module.exports = reviewDB;