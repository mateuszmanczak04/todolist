import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext';

const CreateArea = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { updateDocument } = useFirestore('users');
  const { user } = useAuthContext();
  const { document: userData } = useDocument('users', user.uid);

  const onAdd = () => {
    const id = uuidv4();
    setTitle('');
    setContent('');

    const note = {
      title,
      content,
      id,
    };

    console.log(userData);

    const previousNotes = userData.notes;

    const newNotes = [...previousNotes, note];

    updateDocument(user.uid, { notes: newNotes });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        justifyContent: 'center',
        margin: '0 auto',
        width: '80%',
        maxWidth: '400px',
      }}>
      <TextField
        id='title'
        variant='outlined'
        label='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id='content'
        variant='outlined'
        label='Content'
        multiline
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant='contained' disableElevation onClick={onAdd}>
        Add
      </Button>
    </Box>
  );
};

export default CreateArea;
