const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    discrition: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        default: ''
    },
    userProfile: {
        type: String,
        default: ''
    },
    titlePhoto: {
        type: String,
        default: ''
    },
    postTime: {
        type: String,
        default: ''
    }
})

const blogDB = mongoose.model('blog', blogSchema);
module.exports = blogDB;