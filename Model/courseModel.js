const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
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
    student: {
        type: Number,
        required: true,
        trim: true
    },
    lesson: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    oldPrice: {
        type: Number,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    userPhoto: {
        type: String,
        default: ""
    },
    headPhoto: {
        type: String,
        default: ""
    }
})

const courseDB = mongoose.model('course', courseSchema);
module.exports = courseDB;