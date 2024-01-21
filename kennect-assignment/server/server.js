const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Post } = require('./models');
const Post = require('./models/Post');

const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/kennect-assignment';

app.use(bodyParser.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a new post
app.post('/api/posts', async (req, res) => {
  try {
    const { userName, postMessage } = req.body;
    const newPost = new Post({ userName, postMessage });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a comment to a post
app.post('/api/posts/:postId/comments', async (req, res) => {
  try {
    const postId = req.params.postId;
    const { userName, commentMessage } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push({ userName, commentMessage });
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, Kennect Assignment!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
