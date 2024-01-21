import React, { useState } from 'react';
import {TextField,Button} from '@mui/material';

const NewPost = ({ onPostSubmit }) => {
  const [userName, setUserName] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePostMessageChange = (event) => {
    setPostMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (userName.trim() !== '' && postMessage.trim() !== '') {
      onPostSubmit({ userName, postMessage });
      setUserName('');
      setPostMessage('');
    } else {
      alert('Please enter both name and post message.');
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
        label="Post Message"
        variant="outlined"
        multiline
        rows={4}
        value={postMessage}
        onChange={handlePostMessageChange}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <Button variant="contained" onClick={handleSubmit}
      >Post</Button>
    </div>
  );
};

export default NewPost;
