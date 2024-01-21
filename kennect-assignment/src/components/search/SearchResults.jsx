import React from 'react';
import { Typography, Paper, CircularProgress } from '@mui/material';
import NoResultsMessage from './NoResultsMessage';

const SearchResults = ({ posts, isLoading }) => {
  return (
    <div className="posts-container">
      {isLoading ? (
        <CircularProgress />
      ) : posts.length >0 ?(
        posts.map((post) => (
          <Paper key={post.id} elevation={3} className="post">
            <Typography variant="h5" gutterBottom>
              {post.userName}'s Post:
            </Typography>
            <Typography>{post.postMessage}</Typography>

            <div className="comments-container">
              {/* Display existing comments */}
              {post.comments.map((comment) => (
                <Paper key={comment.id} elevation={1} className="comment">
                  <Typography variant="body1">
                    {comment.userName}'s Comment: {comment.commentMessage}
                  </Typography>
                </Paper>
              ))}
            </div>
          </Paper>
        ))
      ):(<NoResultsMessage></NoResultsMessage>)}
    </div>
  );
};

export default SearchResults;
