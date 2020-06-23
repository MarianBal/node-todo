import React, { useState, useEffect } from 'react';

import MainAppView from './MainAppView';

const MainAppWrapper = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {}, []);
  return <MainAppView />;
};

export default MainAppWrapper;
