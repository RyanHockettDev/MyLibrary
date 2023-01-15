const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
    bookID: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)