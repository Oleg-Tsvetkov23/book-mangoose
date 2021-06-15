const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    const otv = {
        "id" : 1,
        "mail" : "test@mail.ru"
    }
    res.status(201).json(otv)
})

module.exports = router