import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStreak.css';

export default function CalendarStreak() {
  const [date, setDate] = useState(new Date());
  // you could pass tileClassName to highlight streak days
  return (
    <div className="calendar-streak">
      <h3>Calendar streaks</h3>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) =>
          /* example: highlight all Mondays */
          date.getDay() === 1 ? 'streak-day' : null
        }
      />
    </div>
  );
}
