var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/newDb',(err)=>{
    console.log(err? err : 'Connected  to   the database');
})

app.use((req,res,next)=>{
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.listen(3000,()=>{
    console.log('app listen on port 3k');
})