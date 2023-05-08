var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    favorites : [String],
    marks : [Number]
})

var addressSchema = new Schema({
    village : String,
    city : String,
    pin : Number,
    user : Schema.Types.ObjectId
})