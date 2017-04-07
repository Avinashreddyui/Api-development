 var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');
Book = require('./models/book')
//connect to moongose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get("/", function(req, res){
   res.send("hEllo Avinash"); 
});

app.get('/api/geners', function(req, res){
   Genre.getGenres(function (err, genres) {
       if(err){
           throw err;
       }
       res.json(genres);
   });
});
 app.get('/api/books', function(req, res){
     Book.getbooks(function (err, genres) {
         if(err){
             throw err;
         }
         res.json(genres);
     });
 });
 app.get('/api/books/:_id', function(req, res){
     Book.getbookById(req.params._id,function (err, genres) {
         if(err){
             throw err;
         }
         res.json(genres);
     });
 });
app.listen(8080, function(){
    console.log("Express is running at port 8080");
});
