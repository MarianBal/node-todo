import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/translations';
import './card.scss';

const CardView = ({ notes }) => {
  const { notesContainer, eachNote, close } = classNames.card;
  return (
    <div className={notesContainer}>
      {notes.length
        ? notes.map(note => (
            <div className={eachNote} key={note.toDo}>
              <div className={close}>{translations.card.x}</div>
              {note.toDo}
            </div>
          ))
        : null}
    </div>
  );
};
export default CardView;
