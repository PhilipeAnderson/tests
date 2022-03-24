import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/index';
import { Reiki } from './pages/Reiki';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Reiki />
    </div>
  );
}

export default App;
