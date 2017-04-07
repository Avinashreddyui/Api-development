/**
 * Created by Avinash Theppala on 4/2/2017.
 */
var mongoose = require('mongoose');

//Genre Schema

var genreSchema = mongoose.Schema({
   name:{
       type:String,
       required: true
   },
    create_date:{
       type:Date,
        default:Date.now
    }
});

var Genre = module.exports = mongoose.model('gener', genreSchema);

//get geners
module.exports.getGenres = function (callback, limit) {
    Genre.find(callback).limit(limit);
}

//add gener
module.exports.addGenres = function (gener ,callback) {
    Genre.create(gener,callback);
}