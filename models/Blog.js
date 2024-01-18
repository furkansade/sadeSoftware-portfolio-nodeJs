const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    markdown: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100000
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;