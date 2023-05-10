var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: String,
    article:{type:String, maxlength:30}
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;