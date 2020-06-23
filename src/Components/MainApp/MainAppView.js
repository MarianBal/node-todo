import React from 'react';

import './mainApp.scss';

const MainAppview = ({ notes }) => {
  return (
    <div className="container">
      <div>
        {notes.length ? notes.map((note) => <h1>{note.toDo}</h1>) : null}
      </div>
    </div>
  );
};

export default MainAppview;
