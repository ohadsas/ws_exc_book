var express = require('express');
var app = express();
var Book = require('./Book'); 
var Book = new Book; 

app.get('/', function(req, res) {
    res.send("Book Ws ROOT created");
    res.status(200);
});

app.get('/all_books', function(req, res) { //route /all_books
    var j = Book.getAllBooks();
    res.set ('X-header-one', 'all_books');
    console.log("Path : /all_books");
    res.status(200).json(j);
});

app.get('/id/:Id', function(req, res) { //route /id
    var j = Book.getBooksById(req.params.Id);
    res.set ('X-header-two', 'id');
    console.log("Path : /id/");
    res.status(200).json(j);
});

app.get('/sell_date/:Sell_Date', function(req, res) { //route /sell_date
    var j = Book.getAllBestSellersByMonth(req.params.Sell_Date);
    res.set ('X-header-three', 'sell_date');
    console.log("Path : /sell_date/");
    res.status(200).json(j);
});

app.get('/author_month/:Author/:Month', function(req, res) { //route /author_month
    var j = Book.getBookByAuthorAndMonth((req.params.Author),(req.params.Month));
    res.set ('X-header-four', 'author_month');
    console.log("Path : /author_month/");
    res.status(200).json(j);
});
//port 
app.listen(process.env.PORT || 3000);
console.log ("listening to Port 3000");

//methodes
// Book.getAllBooks();
// Book.getBookByAuthorAndMonth('Moshe', 'January');
// Book.getAllBestSellersByMonth('May');
// Book.getBooksById(10);
