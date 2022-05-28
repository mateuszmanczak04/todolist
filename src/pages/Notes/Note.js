import React from 'react';
import { Paper, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ title, content, id, deleteNote }) => {
  return (
    <Grid item xs={6} md={4} lg={3}>
      <Paper
        elevation={0}
        sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
          {title}
        </Typography>
        <Typography>{content}</Typography>
        <IconButton onClick={(e) => deleteNote(id)}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default Note;
