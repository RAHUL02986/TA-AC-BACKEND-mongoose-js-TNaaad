var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tags: [String],
    like: {type:Number, default:0},
    author: String,
    comments: String
  },
  { timestamps: true }
);

var Article = mongoose.model('Article',articleSchema);

module.exports = Article;