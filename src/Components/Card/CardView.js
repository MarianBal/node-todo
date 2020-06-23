import React from 'react';

import { classNames } from './../../constants/classNames';
import './card.scss';

const CardView = ({ notes }) => {
  const { notesContainer, eachNote } = classNames.card;
  return (
    <div className={notesContainer}>
      {notes.length
        ? notes.map(note => (
            <div className={eachNote} key={note.toDo}>
              {note.toDo}
            </div>
          ))
        : null}
    </div>
  );
};
export default CardView;
