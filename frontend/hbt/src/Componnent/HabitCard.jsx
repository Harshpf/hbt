


// // HabitCard.jsx
import React from 'react';
import './HabitCard.css';

// import React, { useEffect } from 'react';
// import axios from 'axios';


const HabitCard = ({ habit }) => {
  if (!habit) return null;

  //  useEffect(() => {
  //   const fetchHabits = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/getAllHabits', {withCredentials: true});
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching habits:', error);
  //     }
  //   };

  //   fetchHabits();
  // }, []);




  return (
    <div className="habit-card">
      <div className="habit-card-header">
        <h3>{habit.name}</h3>
        <span className="category">{habit.category}</span>
      </div>

      <p>{habit.description}</p>

      <div className="streak-priority">
        <span className="streak">⭐ {habit.streak || '0'} day streak</span>
        <span className={`priority ${habit.priority.toLowerCase()}`}>
          {habit.priority} Priority
        </span>
      </div>

      <div className="schedule">
        <strong>Schedule</strong>
        <div className="days">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div
              key={day}
              className={`day ${habit.days?.includes(day) ? 'active' : ''}`}
            >
              {day[0]}
            </div>
          ))}
        </div>
      </div>

      <div className="time-duration">
        <div>⏰ Time: {habit.time}</div>
        <div>🕒 Duration: {habit.duration} mins</div>
      </div>

      {habit.enableReminder && (
        <div className="reminder">🔔 Reminder at {habit.reminderTime || 'N/A'}</div>
      )}

      <div className="goal">
        <strong>Goal:</strong> {habit.goal}
      </div>

      <div className="note">
        <strong>Today's Note:</strong> {habit.notes || 'No note yet'}
      </div>

      <button>delete</button>
    </div>
  );
};

export default HabitCard;


// import React, { useEffect } from 'react';
// import axios from 'axios';

// const HabitCard = () => {
//   useEffect(() => {
//     const fetchHabits = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/getAllHabits', {withCredentials: true});
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching habits:', error);
//       }
//     };

//     fetchHabits();
//   }, []);

//   return (
//     <div>
//       {/* Habit cards will be rendered here */}
//     </div>
//   );
// };

// export default HabitCard;







