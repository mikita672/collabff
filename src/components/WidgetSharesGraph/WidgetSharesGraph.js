import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './WidgetSharesGraph.scss';

// Register all necessary components
Chart.register(...registerables);

const WidgetSharesGraph = () => {
  const [selectedCompany, setSelectedCompany] = useState('Apple');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Static share values data
  const shareData = {
    'Apple': [150, 153, 149, 157, 162, 168, 164, 170, 173, 176, 179, 182], // Apple stock fluctuating between $150 and $182
    'Google': [2800, 2850, 2780, 2900, 2950, 3000, 2975, 3050, 3100, 3150, 3200, 3250], // Google (Alphabet) fluctuating between $2780 and $3250
    'Amazon': [3400, 3450, 3380, 3500, 3550, 3600, 3580, 3650, 3700, 3750, 3800, 3850], // Amazon fluctuating between $3380 and $3850
    'Microsoft': [300, 310, 320, 315, 325, 335, 330, 340, 345, 350, 355, 360], // Microsoft fluctuating between $300 and $360
    'Tesla': [600, 620, 580, 640, 660, 680, 670, 690, 710, 730, 750, 770], // Tesla fluctuating between $580 and $770
   'Commerzbank': [4300, 4350, 4400, 4350, 4340, 4350, 4450, 4500, 4510, 4520, 4530, 4600]

  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const data = {
      labels: months,
      datasets: [
        {
          label: `${selectedCompany} Share Prices`,
          data: shareData[selectedCompany],
          borderColor: '#FFCC00', // Line color
          borderWidth: 2, // Line thickness
          fill: false, // No filling under the line
        },
      ],
    };

    setChartData(data);
  }, [selectedCompany]);

  // Chart options to customize the grid and text colors
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#222', // Grid color
        },
        ticks: {
          color: 'white', // X-axis text color
        },
      },
      y: {
        grid: {
          color: '#222', // Grid color
        },
        ticks: {
          color: 'white', // Y-axis text color
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Legend text color
          usePointStyle: true, // Use point style
          generateLabels: (chart) => {
            const original = Chart.defaults.plugins.legend.labels.generateLabels;
            const labels = original(chart);
            return labels.map(label => ({
              ...label,
              pointStyle: 'line', // Line style in legend
              strokeStyle: chart.data.datasets[label.datasetIndex].borderColor,
              hidden: !chart.isDatasetVisible(label.datasetIndex),
            }));
          },
        },
      },
    },
  };

  return (
    <div className="widgetSharesGraph">
      <div className="top-row">
        <h3 style={{ color: 'white', marginRight: 'auto' }}>Company Share Prices</h3>
        <div className="company-select">
          <label htmlFor="company" style={{ color: 'white' }}></label>
          <select
            id="company"
            className="company-dropdown"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="Apple">Apple</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Tesla">Tesla</option>
            <option value="Commerzbank">Commerzbank</option>
          </select>
        </div>
      </div>
      <div className="divider"></div> {/* Divider added here */}
      <div className="graph-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default WidgetSharesGraph;
