const uidGenerator = require('node-unique-id-generator')
const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title : { type : String, required: true},
    description: { type : String, default : "" },
    authors: { type : String, required : true},
    favorite: { type : String, default : ""},
    fileCover: { tyep :String, default : ""},
    fileName: {type : String, default : ""}
})

module.exports = model('books', bookSchema)