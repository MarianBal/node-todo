import React, { useState, useEffect } from 'react';

import MainAppView from './MainAppView';
import { notesData, addToDo, deleteNote } from './helper';
import { handleEvent } from './../../Utils/handleSetters';

const MainAppWrapper = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    notesData(setNotes);
  }, []);

  return (
    <MainAppView
      notes={notes}
      handleNewNote={handleEvent(setNewNote)}
      addToDo={addToDo(newNote, setNotes, setNewNote)}
      newNote={newNote}
      deleteNote={deleteNote()}
    />
  );
};

export default MainAppWrapper;
