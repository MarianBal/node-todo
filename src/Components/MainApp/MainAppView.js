import React from 'react';

import './mainApp.scss';
import Input from './../Input';
import Card from './../Card';
import { classNames } from './../../constants/classNames';

const MainAppView = ({ notes, handleNewNote }) => {
  return (
    <div className={classNames.mainApp.mainContainer}>
      <Input handleNewNote={handleNewNote} />
      <Card notes={notes} />
    </div>
  );
};

export default MainAppView;
