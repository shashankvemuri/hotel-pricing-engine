import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const priceData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Competitor "Basic Room" Prices',
        data: data.map(d => d.price),
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#36A2EB',
      }
    ]
  };

  const occupancyData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Occupancy',
        data: data.map(d => d.occupancy),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#FF6384',
      }
    ]
  };

  const priceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide X-axis on the first chart
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price ($)',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  const occupancyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          minRotation: 45,
          maxRotation: 45,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Occupancy (%)',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div style={{ height: '600px' }}>
      <div style={{ height: '45%', marginBottom: '2%' }}>
        <Line data={priceData} options={priceOptions} />
      </div>
      <div style={{ height: '45%' }}>
        <Line data={occupancyData} options={occupancyOptions} />
      </div>
    </div>
  );
};

export default Chart;