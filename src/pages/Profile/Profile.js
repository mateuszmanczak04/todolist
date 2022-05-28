import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: '80%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '1rem',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}>
        <Typography>Email:</Typography>
        <Typography sx={{ fontWeight: '700' }}>{user.email}</Typography>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          width: '80%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '1rem',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          marginTop: '16px',
        }}>
        <Typography>Display name:</Typography>
        <Typography sx={{ fontWeight: '700' }}>{user.displayName}</Typography>
      </Paper>
    </>
  );
};

export default Profile;
