import React from 'react';
import './HabitCard.css';

const HabitCard = ({ habit }) => {
  return (
    <div className="habit-card">
      <div className="habit-card-header">
        <h3>{habit.habitName}</h3>
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
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div
              key={i}
              className={`day ${
                habit.days.includes(day) ? 'active' : ''
              }`}
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
        <strong>Today's Note:</strong> {habit.note || 'No note yet'}
      </div>
    </div>
  );
};

export default HabitCard;
