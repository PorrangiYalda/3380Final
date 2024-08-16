const mongoose = require('mongoose');
//create Schema class
const Schema= mongoose.Schema;
//create Schema Object
const BookSchema = new Schema (
    {
        bookTitle: {
            type: String,
            required: true
        },
        bookAuthor: {
            type: String,
            required: true
        },
      
        description: {
            type: String,
            
        }
    }
);

module.exports = mongoose.model('300370005-yalda',BookSchema);