import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './CompletionChart.css';

export default function CompletionChart() {
  const data = {
    labels: ['15','16','17','18','19','20','21','22','23','24'],
    datasets: [
      {
        label: '% Completed',
        data: [60, 5, 88, 50, 15, 65, 42, 0, 0, 30],
        backgroundColor: '#b39ddb',
      },
      {
        label: '% Missed',
        data: [40, 95, 12, 50, 85, 35, 58, 100, 100, 70],
        backgroundColor: '#e1bee7',
      }
    ]
  };

  const options = {
    scales: { y: { beginAtZero: true, max: 100 } },
    plugins: { legend: { position: 'top' } }
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}
