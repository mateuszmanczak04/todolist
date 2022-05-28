import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, error, isPending } = useSignup();

  const handleSignup = () => {
    signup(email, password, displayName);
  };

  return (
    <Box
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '80%',
        maxWidth: '400px',
        margin: '0 auto',
      }}>
      <TextField
        type='email'
        variant='outlined'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type='password'
        variant='outlined'
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        variant='outlined'
        label='Display name'
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      {!isPending && (
        <Button onClick={handleSignup} variant='contained'>
          Sign Up
        </Button>
      )}
      {isPending && (
        <Button disabled variant='contained'>
          Loading
        </Button>
      )}
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
    </Box>
  );
};

export default Signup;
