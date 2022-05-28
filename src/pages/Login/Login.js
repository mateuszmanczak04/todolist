import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleLogin = () => {
    login(email, password);
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
      {!isPending && (
        <Button variant='contained' onClick={handleLogin}>
          Login
        </Button>
      )}
      {isPending && (
        <Button disabled variant='contained'>
          Loading...
        </Button>
      )}
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
    </Box>
  );
};

export default Login;
