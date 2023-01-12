// @desc Get books
// @route GET /api/books
// @access Private
const getBooks = (req, res) => {
    res.status(200).json({message: 'Get books'})
}

// @desc Create books
// @route POST /api/books
// @access Private
const createBooks = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({message: 'Create books'})
}

// @desc Update books
// @route PUT /api/books/:id
// @access Private
const updateBooks = (req, res) => {
    res.status(200).json({message: `Update books ${req.params.id}`})
}

// @desc Delete books
// @route DELETE /api/books/:id
// @access Private
const deleteBooks = (req, res) => {
    res.status(200).json({message: `Delete books ${req.params.id}`})
}

module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks,
}