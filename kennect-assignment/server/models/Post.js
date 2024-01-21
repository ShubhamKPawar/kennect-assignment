const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userName: String,
  postMessage: String,
  comments: [
    {
      userName: String,
      commentMessage: String,
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
