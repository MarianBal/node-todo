import React from 'react';

import './mainApp.scss';
import Input from './../Input';
import Card from './../Card';
import { classNames } from './../../constants/classNames';

const MainAppView = ({
  notes,
  handleNewNote,
  addToDo,
  newNote,
  deleteNote
}) => {
  return (
    <div className={classNames.mainApp.mainContainer}>
      <Input
        handleNewNote={handleNewNote}
        addToDo={addToDo}
        newNote={newNote}
      />
      <Card notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default MainAppView;
