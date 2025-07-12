import React, { useState } from 'react';
import './HabitForm.css';

const HabitForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    habitName: '',
    category: 'Health',
    description: '',
    days: [],
    time: '08:00',
    duration: 30,
    priority: 'Medium',
    enableReminder: false,
    reminderTime: '',
    goal: '',
    note: ''
  });

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'days') {
      const updatedDays = checked
        ? [...formData.days, value]
        : formData.days.filter((d) => d !== value);
      setFormData({ ...formData, days: updatedDays });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <h2>Create New Habit</h2>

      <input
        type="text"
        name="habitName"
        placeholder="e.g., Morning Jog"
        value={formData.habitName}
        onChange={handleChange}
        required
      />

      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Health">Health</option>
        <option value="Productivity">Productivity</option>
        <option value="Learning">Learning</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="description"
        placeholder="Describe your habit..."
        value={formData.description}
        onChange={handleChange}
      />

      <div className="days">
        <label>Schedule:</label>
        {daysOfWeek.map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              name="days"
              value={day}
              checked={formData.days.includes(day)}
              onChange={handleChange}
            />
            {day}
          </label>
        ))}
      </div>

      <div className="time-duration">
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>
        <label>
          Duration (mins):
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
      </div>

      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="enableReminder"
          checked={formData.enableReminder}
          onChange={handleChange}
        />
        Enable Reminder
      </label>

      {formData.enableReminder && (
        <input
          type="time"
          name="reminderTime"
          value={formData.reminderTime}
          onChange={handleChange}
        />
      )}

      <input
        type="text"
        name="goal"
        placeholder="Goal"
        value={formData.goal}
        onChange={handleChange}
      />

      <input
        type="text"
        name="note"
        placeholder="Today's Note"
        value={formData.note}
        onChange={handleChange}
      />

      <button type="submit">Save Habit</button>
    </form>
  );
};

export default HabitForm;
