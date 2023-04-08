const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const author = new Schema({

     authorname: String ,
     Id: number,
     email: String ,
     password: number
     });
const authorModel= mongoose.model('authorModel', author)

module.exports = author;