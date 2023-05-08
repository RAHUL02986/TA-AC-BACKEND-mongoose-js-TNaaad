var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    email : {type : String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: Number, minlength: 5},
    createAt : {type: Date, default: newDate()},
    favourites : [String]

},{timestamps: true})

var User = mongoose.model('User', userSchema);

module.exports = User;