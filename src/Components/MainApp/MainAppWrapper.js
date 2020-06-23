import React, { useState, useEffect } from 'react';

import MainAppView from './MainAppView';
import { notesData } from './helper';

const MainAppWrapper = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesData(setNotes);
  }, []);
  return <MainAppView notes={notes} />;
};

export default MainAppWrapper;
