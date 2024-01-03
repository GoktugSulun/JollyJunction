import React from 'react';
import RouteList from './Core/Routes/Routes';
import { useNotifier } from './Core/Hooks';

const App = () => {
  useNotifier();
  
  return (
    <RouteList />
  );
};

export default App;