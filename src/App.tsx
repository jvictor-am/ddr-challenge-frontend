import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <Home />
    </>
  );
};

export default App;
