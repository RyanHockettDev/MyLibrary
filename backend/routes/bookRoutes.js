const express = require('express')
const router = express.Router()
const { getBooks, createBooks, updateBooks, deleteBooks } = require('../controllers/bookController')

router.route('/').get(getBooks).post(createBooks)

router.route('/:id').put(updateBooks).delete(deleteBooks)

module.exports = router