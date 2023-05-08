var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app');
var app = express();
app.use((req,res,next)=>{
    next();
})

app.listen(3000,()=>{
    console.log('app listen on port 3k');
})

