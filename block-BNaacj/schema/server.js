var express = require('express');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/schema");

var app = express();

app.listen(3000, ()=>{
    console.log('app listen on port 3k');
})