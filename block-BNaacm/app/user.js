var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    favourites: [String],
    marks: [Number],
    password: {
      type: String,
      min: 5,
      max: 15,
    },
    createdAt: {
      type: Date,
      default: new Date,
    },
  })

  let Users = mongoose.model("Users", UserSchema);

  module.exports = Users;
