import React from 'react';
import { Typography } from '@mui/material';

const NoResultsMessage = () => {
  return (
    <div className="no-results-message">
      <Typography variant="body1" color="textSecondary">
        No results found. Try a different search phrase.
      </Typography>
    </div>
  );
};

export default NoResultsMessage;
