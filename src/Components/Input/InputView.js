import React from 'react';
import TextField from '@material-ui/core/TextField';

import './input.scss';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/translations';

const InputView = ({ handleNewNote, addToDo, newNote }) => {
  const { input } = translations;
  return (
    <div className={classNames.input.formContainer}>
      <TextField
        label={input.placeHolder}
        fullWidth={true}
        onChange={handleNewNote}
        onKeyPress={addToDo}
        value={newNote}
      />
    </div>
  );
};

export default InputView;
