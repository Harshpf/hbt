


// // HabitCard.jsx
// import React from 'react';
// import './HabitCard.css';



// const HabitCard = ({ habit }) => {
//   if (!habit) return null;

  




//   return (
//     <div className="habit-card">
//       <div className="habit-card-header">
//         <h3>{habit.name}</h3>
//         <span className="category">{habit.category}</span>
//       </div>

//       <p>{habit.description}</p>

//       <div className="streak-priority">
//         <span className="streak">⭐ {habit.streak || '0'} day streak</span>
//         <span className={`priority ${habit.priority.toLowerCase()}`}>
//           {habit.priority} Priority
//         </span>
//       </div>

//       <div className="schedule">
//         <strong>Schedule</strong>
//         <div className="days">
//           {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
//             <div
//               key={day}
//               className={`day ${habit.days?.includes(day) ? 'active' : ''}`}
//             >
//               {day[0]}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="time-duration">
//         <div>⏰ Time: {habit.time}</div>
//         <div>🕒 Duration: {habit.duration} mins</div>
//       </div>

//       {habit.enableReminder && (
//         <div className="reminder">🔔 Reminder at {habit.reminderTime || 'N/A'}</div>
//       )}

//       <div className="goal">
//         <strong>Goal:</strong> {habit.goal}
//       </div>

//       <div className="note">
//         <strong>Today's Note:</strong> {habit.notes || 'No note yet'}
//       </div>

//       <button>delete</button>
//     </div>
//   );
// };

// export default HabitCard;


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











import React, { useState } from 'react';
import './HabitCard.css';
import { Delete } from "./allApi";
import { Complete } from "./allApi";



const HabitCard = ({ habit, onDelete, onUpdate }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  if (!habit) return null;

   const handleDelete = async () => {
    try {
      console.log('Deleting habit with id:', habit._id); // print the habit._id
      await Delete(habit._id, {
        withCredentials: true,
      });
      onDelete(habit._id);
    } catch (error) {
      console.error('Delete error:', error);
    }
    };

  const handleUpdate = () => {
    onUpdate(habit); // open modal or route for editing
  };

  const handleComplete =  async() => {
    try{
    setIsCompleted(true); // local UI update
    // Optionally send completion to backend
    console.log(habit.days)
    const today = new Date().toISOString().split('T')[0]; // "2025-07-28"
await Complete(habit._id, habit.days, today,{
  withCredentials:true
});
    
    }
    catch (error){
      console.error({msg:"mark not complete",message:error.message});
    }
  };

  return (
    <div className={`habit-card ${isCompleted ? 'completed' : ''}`}>
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

      <div className="habit-actions">
        <button onClick={handleDelete}>🗑️ Delete</button>
        <button onClick={handleUpdate}>✏️ Update</button>
        <label className="complete-checkbox">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleComplete}
          />
          Mark as Complete
        </label>
      </div>
    </div>
  );
};

export default HabitCard;








