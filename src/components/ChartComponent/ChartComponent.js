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

const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
        {
            label: 'Траты за 2023 год',
            data: [165, 259, 180, 281, 56, 155, 123, 231, 123, 333, 123, 121],
            borderColor: '#FFCC00',
            backgroundColor: 'rgba(75,192,192,0.2)',
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
            text: 'Sales Over Time',
        },
    },
};

const ChartComponent = () => {
    return <Line data={data} options={options} />;
};

export default ChartComponent;
