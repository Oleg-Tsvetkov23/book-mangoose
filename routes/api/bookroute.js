const express = require('express')
const router = express.Router()

const Books = require('../../models/books');

router.get('/', async (req, res) => {
    const books = await Books.find().select('-__v');
    res.json(books)
})


router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const book = await Books.findById(id).select('-__v');
        res.json(book);
    } catch (e) {
        console.error(e);
        res.status(404).json("books | not found");
    }
})

router.post('/', async (req, res) => {
    const {title, description, authors, favorite, fileCover } = req.body
    const nBook = new Books({title, description, authors, favorite, fileCover})
    try {
        await nBook.save();
        res.json(nBook);
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {title, description, authors, favorite, fileCover} = req.body
    try {
        await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover});
        res.redirect(`/api/books/${id}`);
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        await Books.deleteOne({_id: id});
        res.json("Ok");
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
})

module.exports = router