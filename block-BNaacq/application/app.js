var express = require('express');

var mongoose = require('mongoose');

var article = require('./model/articale');

var  comment = require('./model/comment');

var user = require('./model/user'); 

var app = express();

app.use(express.json());


mongoose
  .connect('mongodb://127.0.0.1:27017/application', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Db connected'))
  .catch((err) => {
    console.error(err);
  });


  app.listen(1000,()=>{
    console.log('app listen on port 5k');
  })