const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

// @desc Get books
// @route GET /api/books
// @access Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
})

// @desc Create books
// @route POST /api/books
// @access Private
const createBooks = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const book = await Book.create({
        text: req.body.text
    })
    res.status(200).json(book)
})

// @desc Update books
// @route PUT /api/books/:id
// @access Private
const updateBooks = asyncHandler(async (req, res) => {
    const book = await global.findByID(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedBook)
})

// @desc Delete books
// @route DELETE /api/books/:id
// @access Private
const deleteBooks = asyncHandler(async (req, res) => {
    const book = await global.findByID(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }
    await book.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks,
}