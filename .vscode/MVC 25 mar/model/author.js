const mongoose = require('mongoose');
const author = 
{ 
    name: { type: String },
     email: { type: String }
     };
const Author= mongoose.model('author', author)

module.exports = Author;