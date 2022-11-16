const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    }
})

const bookDB = mongoose.model('bookUser', bookSchema);
module.exports = bookDB;