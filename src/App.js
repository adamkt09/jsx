import React, { useState } from 'react';
import './App.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days].map((day, index) => (
      <div key={index} className={`day ${index < firstDayOfMonth ? 'blank' : ''}`}>
        {day}
      </div>
    ));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">{renderCalendar()}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;

