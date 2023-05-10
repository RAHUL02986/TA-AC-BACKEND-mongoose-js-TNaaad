var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name :{type:String, required: true},
    email:{type:String, MathMLElement:'@'},
    age: {type:Number, default:18}


},
  { timestamps: true }
);

var User = mongoose.model('User',userSchema);

module.exports = userSchema;