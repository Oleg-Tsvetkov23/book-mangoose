const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const Logger = require('./middleware/logger')
const errorMiddleware = require('./middleware/error')
const libraryApiRouter = require('./routes/api/bookroute')
const usersRouter = require('./routes/users')
const indexRouter = require('./routes/index')
const bookRouter = require('./routes/book')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("view engine", "ejs");

app.use(Logger)

app.use('/', indexRouter)
app.use('/book', bookRouter)
app.use('/api/books', libraryApiRouter)
//app.use('/api/user', usersRouter)

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'example';
const NameDB = process.env.DB_NAME || 'myBook'
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/'

async function start() {
    try {    
        await mongoose.connect(HostDb, {
            user: UserDB,
            pass: PasswordDB,
            dbName: NameDB,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
