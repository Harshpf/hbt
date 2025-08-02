// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './CalendarStreak.css';

// export default function CalendarStreak() {
//   const [date, setDate] = useState(new Date());
//   // you could pass tileClassName to highlight streak days
//   return (
//     <div className="calendar-streak">
//       <h3>Calendar streaks</h3>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileClassName={({ date }) =>
//           /* example: highlight all Mondays */
//           date.getDay() === 1 ? 'streak-day' : null
//         }
//       />
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './CalendarStreak.css';
// import axios from 'axios';
// import {getCalender} from './allApi';


// export default function CalendarStreak({ habitId }) {
//   const [date, setDate] = useState(new Date());
//   const [completedDates, setCompletedDates] = useState([]);

//   useEffect(() => {
//     const fetchCompleted = async () => {
//       try {
//         // console.log(habitId)
//         const res = await getCalender(
//           habitId
//         );
//         console.log(res.data);
//         setCompletedDates(res.data); // array of "YYYY-MM-DD"
//       } catch (err) {
//         console.error('Failed to fetch completed dates:', err);
//       }
//     };

//     fetchCompleted();
//   }, [habitId]);

//   const isDateCompleted = (tileDate) => {
//     const dateStr = tileDate.toISOString().split('T')[0]; // "YYYY-MM-DD"
//     return completedDates.includes(dateStr);
//   };

//   return (
//     <div className="calendar-streak">
//       <h3>Calendar Streak</h3>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileClassName={({ date }) =>
//           isDateCompleted(date) ? 'streak-day' : null
//         }
//       />
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStreak.css';
import { getCalender } from './allApi';

export default function CalendarStreak({ habitId }) {
  const [date, setDate] = useState(new Date());
  const [completedDates, setCompletedDates] = useState([]);

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const res = await getCalender(habitId);
        // console.log("Completed Dates from backend:", res.data);

        // Assuming res.data is the whole object with a 'completed' array
        if (res.data && Array.isArray(res.data.completed)) {
          setCompletedDates(res.data.completed);
        } else {
          console.warn("Unexpected response format", res.data);
        }
      } catch (err) {
        console.error('Failed to fetch completed dates:', err);
      }
    };

    fetchCompleted();
  }, [habitId]);

  const isDateCompleted = (tileDate) => {
    const dateStr = tileDate.toISOString().split('T')[0]; // YYYY-MM-DD
    return completedDates.includes(dateStr);
  };

  return (
    <div className="calendar-streak">
      <h3>Calendar Streak</h3>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) =>
          isDateCompleted(date) ? 'streak-day' : null
        }
      />
    </div>
  );
}



