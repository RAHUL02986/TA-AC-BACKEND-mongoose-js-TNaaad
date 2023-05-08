var express = require('express');

var logger = require('morgan');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/application",
(err)=>{
    console.log(err ? err : "connect to app");
}
)

var app = express();

app.use(logger('dev'));

app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.listen(3000,()=>{
    console.log('app listen on port 3k');
})