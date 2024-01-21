import React from 'react';
import { Typography } from '@mui/material';

const NoPostsMessage = () => {
  return (
    <div className="no-posts-message">
      <Typography variant="body1" color="textSecondary" align="center">
        No posts available. Create a new post to get started!
      </Typography>
    </div>
  );
};

export default NoPostsMessage;
