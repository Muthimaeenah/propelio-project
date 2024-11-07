// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: '',
        data: [12, 19, 3, 5, 2, 3, 20, 15, 22, 18, 30, 25],
        backgroundColor: [
            '#009688',
            '#ff7900',

        ],
        // borderColor: '#009688',
        borderWidth: -5,
        borderRadius: 30,
        barThickness: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {      
        display: true,
        text: 'Sales Analytics by Month',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
