const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema =  new Schema({
    region: String,
    rate: Number,
    date:{
        type: Date,
        default: Date.now()
    }
});

//Model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;