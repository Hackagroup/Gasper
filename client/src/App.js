import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Main } from './components/main'
import { Bar }  from './components/topbar'
import { MainCalendar } from './components/content'


function App() {
  return (
    <div className="App">
      <Bar />
      <Main />
      <MainCalendar />
    </div>
  );
}

export default App;