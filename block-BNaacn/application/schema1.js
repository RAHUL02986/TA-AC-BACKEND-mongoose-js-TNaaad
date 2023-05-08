var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title : String,
    description : String,
    tags : [String],
    createAt : {type: Date, default: newDate()},
    likes : {type : Number, default : 0}
})

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;