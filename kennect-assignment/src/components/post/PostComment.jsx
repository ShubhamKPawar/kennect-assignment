import React, { useState } from 'react';
import {TextField, Button} from '@mui/material';

const PostComment = ({ onCommentSubmit }) => {
  const [userName, setUserName] = useState('');
  const [commentMessage, setCommentMessage] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleCommentMessageChange = (event) => {
    setCommentMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (userName.trim() !== '' && commentMessage.trim() !== '') {
      onCommentSubmit({ userName, commentMessage });
      setUserName('');
      setCommentMessage('');
    } else {
        alert('Please enter both name and comment message.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <TextField
        label="Your Name"
        variant="outlined"
        value={userName}
        onChange={handleUserNameChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <TextField
        label="Comment Message"
        variant="outlined"
        multiline
        rows={4}
        value={commentMessage}
        onChange={handleCommentMessageChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Comment
      </Button>
    </div>
  );
};

export default PostComment;
