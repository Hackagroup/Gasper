// Author : Amanuel

import React from 'react';
import './styles/App.css';
import './styles/calendar.css'

import { Bar }  from './components/topbar'
import MainCalendar from './components/content'


// App to display calendar and top bar
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