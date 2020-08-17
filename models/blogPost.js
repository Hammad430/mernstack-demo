const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema =  new Schema({
    region: String,
    rate: Number,
    shedName: String,
    sellRate: Number,
    address: String,
    contact: String,
    city: String,
    tag: String,
    date: String,
    timeStamp:{
        type: Date,
        default: Date.now()
    }
});

//Model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;