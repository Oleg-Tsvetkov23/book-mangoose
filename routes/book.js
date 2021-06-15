const express = require('express')
const router = express.Router()
const Books = require('../models/books')

router.get('/', async (req, res) => {
    const book = await Books.find();
    console.log(book)
    res.render("book/index", {
        title: "Список книг",
        books: book,
    })
})

router.get('/create', (req, res) => {
    res.render("book/create", {
        title: "Библиотека | добавление книги",
        book: {},
    })
})

router.post('/create', async (req, res) => {
    const {title, description, authors} = req.body;
    const newBook = new Books({
        title, description, authors
    });

    try {
        await newBook.save();
        res.redirect('/book');
    } catch (e) {
        console.error(e);
    }
})


router.get('/:id', async (req, res) => {
    const {id} = req.params;
    console.log("id",id)
    let book

    try {
        book = await Books.findById(id);
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.render("book/view", {
        title: "Библиотека | просмотр",
        book: book,
    });
})

router.get('/update/:id', async (req, res) => {
    const {id} = req.params;
    console.log("id",id)
    let book

    try {
        book = await Books.findById(id);
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }

    res.render("book/update", {
        title: "Библиотека | редактирование",
        book: book,
    });
});

router.post('/update/:id', async (req, res) => {
    const {id} = req.params
    const {title, description, authors} = req.body

    try {
        await Books.findByIdAndUpdate(id, {title, description, authors})
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404')
    }

    res.redirect(`/book/${id}`)
})

router.post('/delete/:id', async (req, res) => {
    const {id} = req.params

    try {
        await Books.deleteOne({_id: id});
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.redirect(`/book`);
})


module.exports = router