import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/calendar.css'

import { Main } from './components/main'
import { Bar }  from './components/topbar'
import MainCalendar from './components/content'


function App() {
  return (
    <div className="App">
      <Bar />
      {/* <Main /> */}
      <div className = "main_calendar_div">
        <MainCalendar />
      </div>
    </div>
  );
}

export default App;