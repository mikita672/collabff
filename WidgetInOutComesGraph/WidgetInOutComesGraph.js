import React from 'react';
import { Line } from 'react-chartjs-2';
import './WidgetInOutComesGraph.css'; // Import the updated CSS file
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WidgetInOutComesGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // X-axis for months
        datasets: [
            {
                label: 'Incomes',
                data: [14 , 15, 15.5, 16, 16.5, 17, 16, 17, 18, 18.5, 19, 19.5],
                borderColor: '#34eb67', // Update border color to light blue for consistency
                backgroundColor: '#0c5e6b'
               
            },
            {
                label: 'Outcomes',
                data: [13, 14.5, 15, 15., 15, 16.5, 17, 16, 17.5, 17.2, 18, 18.8],
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)'
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 0,  // No padding at the top
                bottom: 0, // No padding at the bottom
                left: 0,  // Remove left padding
                right: 0, // Remove right padding
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white',
                    usePointStyle: true,
                    generateLabels: (chart) => {
                        const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
                        const labels = original(chart);
                        return labels.map(label => ({
                            ...label,
                            pointStyle: 'line',
                            strokeStyle: chart.data.datasets[label.datasetIndex].borderColor,
                            hidden: !chart.isDatasetVisible(label.datasetIndex),
                        }));
                    },
                },
            },
            title: {
                display: true,
                color: 'white',
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#2d4d4d',
                },
                ticks: {
                    color: 'white',
                    
                },
            },
            y: {
                grid: {
                    color: '#2d4d4d',
                },
                ticks: {
                    color: 'white',
                    callback: function(value) {
                        return value + 'M';  // Add 'M' after each value
                    }
                },
            },
        },
    };
    

    return (
        <div className="widgetInOutComesGraph">
            <div className="top-row2">
                <h3>Monthly incomes and outcomes trend</h3>
            </div>
            <div className="divider2"></div>
            <div className="graph-container2">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default WidgetInOutComesGraph;
