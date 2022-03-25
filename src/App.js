import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/index';
import { Reiki } from './pages/Reiki';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Reiki' element={<Reiki />} />
      </Routes>
    </div>
  );
}

export default App;
