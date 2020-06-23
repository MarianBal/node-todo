import React, { useState, useEffect } from 'react';

import MainAppView from './MainAppView';
import { notesData } from './helper';
import { handleEvent } from './../../Utils/handleSetters';

const MainAppWrapper = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    notesData(setNotes);
  }, []);

  console.log(newNote);
  return <MainAppView notes={notes} handleNewNote={handleEvent(setNewNote)} />;
};

export default MainAppWrapper;
