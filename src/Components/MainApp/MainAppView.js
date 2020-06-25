import React from 'react';

import './mainApp.scss';
import Input from './../Input';
import Card from './../Card';
import { classNames } from './../../constants/classNames';

const MainAppView = ({ notes, handleNewNote, addToDo, newNote }) => {
  return (
    <div className={classNames.mainApp.mainContainer}>
      <Input
        handleNewNote={handleNewNote}
        addToDo={addToDo}
        newNote={newNote}
      />
      <Card notes={notes} />
    </div>
  );
};

export default MainAppView;
