import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/translations';
import './card.scss';

const CardView = ({ notes, deleteNote }) => {
  const { notesContainer, eachNote, close } = classNames.card;
  return (
    <div className={notesContainer}>
      {notes.length
        ? notes.map(note => (
            <div className={eachNote} key={note.data}>
              <div className={close}>
                <span onClick={() => deleteNote(note._id)}>
                  {translations.card.x}
                </span>
              </div>
              {note.data}
            </div>
          ))
        : null}
    </div>
  );
};
export default CardView;
