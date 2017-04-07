/**
 * Created by Avinash Theppala on 4/2/2017.
 */
var mongoose = require('mongoose');

//Genre Schema

var bookSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    genre:{
      type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
    },
    pages:{
        type: String,
    },
    image_url:{
    type: String,
        required: true
},
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Book= module.exports = mongoose.model('books', bookSchema);

//get Books
module.exports.getbooks = function (callback, limit) {
    Book.find(callback).limit(limit);
};
module.exports.getbookById = function (id, calback) {
  Book.findById(id, calback);
};