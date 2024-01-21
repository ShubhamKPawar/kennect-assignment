import React, { useState} from 'react';
import { Button, TextField } from '@mui/material';

 const UserNameEntry = ({onUserNameSubmit}) => {
    const [userName, setUserName]=useState('');

    const handleUserNameChange=(event)=>{
        setUserName(event.target.value);
    };
    const handleSubmit=()=>{
        if(userName.trim() !== ''){
            onUserNameSubmit(userName);
        }
        else{
            alert('Please Enter a Valid Name.');
        }
    };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
        <TextField label="Enter Your Name"
         variant='outlined'
         value={userName}
         onChange={handleUserNameChange}
         style={{ marginBottom: '20px', width: '300px' }} />
        <Button variant='contained' onClick={handleSubmit} style={{
            fontSize: '16px',
            padding: '10px 20px',
            color: 'white'
          }}>Submit</Button>
    </div>
  )
}

export default UserNameEntry
