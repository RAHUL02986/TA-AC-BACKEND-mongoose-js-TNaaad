var mongoose = require('mongoose');

var Schema= mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description : String,
    Author : String,
    pages : Number
})