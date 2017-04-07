 var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');
Book = require('./models/book')
//connect to moongose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
// send hello avinash to home page
app.get("/", function(req, res){
   res.send("hEllo Avinash"); 
});
// connect to mongodb and to display json format data at /api/geners
app.get('/api/geners', function(req, res){
   Genre.getGenres(function (err, genres) {
       if(err){
           throw err;
       }
       res.json(genres);
   });
});
// connect to mongodb and to display json format data at /api/books
 app.get('/api/books', function(req, res){
     Book.getbooks(function (err, genres) {
         if(err){
             throw err;
         }
         res.json(genres);
     });
 });
// connect to mongodb and to display json format data at /api/books and we can select using id
 app.get('/api/books/:_id', function(req, res){
     Book.getbookById(req.params._id,function (err, genres) {
         if(err){
             throw err;
         }
         res.json(genres);
     });
 });
//port that our api is going to run
app.listen(8080, function(){
    console.log("Express is running at port 8080");
});
