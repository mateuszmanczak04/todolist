import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDocument } from '../../hooks/useDocument';
import { useFirestore } from '../../hooks/useFirestore';

// components
import CreateArea from './CreateArea';
import Note from './Note';

const Dashboard = ({ currentUser }) => {
  const { user } = useAuthContext();
  const { updateDocument } = useFirestore('users');
  const { document, error } = useDocument('users', user.uid);

  let notes = [];
  if (document) {
    notes = document.notes;
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    updateDocument(user.uid, { notes: newNotes });
  };

  return (
    <>
      <Typography
        variant='h4'
        sx={{
          width: '100%',
          textAlign: 'center',
          fontWeight: 500,
          marginBottom: '16px',
        }}>
        Notes
      </Typography>
      <CreateArea />
      <Grid container spacing={2} mt={4}>
        {notes.map(({ title, content, id }) => (
          <Note
            key={id}
            title={title}
            content={content}
            id={id}
            deleteNote={deleteNote}
          />
        ))}
      </Grid>
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
    </>
  );
};

export default Dashboard;
