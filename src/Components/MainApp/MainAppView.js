import React from 'react';

import './mainApp.scss';
import Input from './../Input';
import { classNames } from './../../constants/classNames';

const MainAppView = ({ notes, handleNewNote }) => {
  return (
    <div className={classNames.mainApp.mainContainer}>
      <Input handleNewNote={handleNewNote} />
      <div>
        {notes.length
          ? notes.map(note => <h1 key={note.toDo}>{note.toDo}</h1>)
          : null}
      </div>
    </div>
  );
};

export default MainAppView;
