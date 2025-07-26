import React from 'react';
import './StreakSummary.css';

export default function StreakSummary({ completed, missed }) {
  return (
    <div className="streak-summary">
      <h2>Streaks</h2>
      <div className="circle-chart">
        {/* You can swap this for any radial-chart lib */}
        <svg viewBox="0 0 36 36" className="circular-chart">
          <circle className="bg" cx="18" cy="18" r="16" />
          <circle
            className="progress"
            cx="18"
            cy="18"
            r="16"
            strokeDasharray={`${completed}, 100`}
          />
        </svg>
      </div>
      <div className="stats">
        <div><strong>Completed</strong> {completed}%</div>
        <div><strong>Missed</strong> {missed}%</div>
      </div>
    </div>
  );
}
