var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    Age : Number,
    password : {type: String, minlength:5, maxlength:15},
    createAt : {type:Date, default: newDate()}
})