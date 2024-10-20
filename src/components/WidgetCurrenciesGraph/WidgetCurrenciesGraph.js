import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './WidgetCurrenciesGraph.css';

// Register all necessary components
Chart.register(...registerables);

const WidgetCurrenciesGraph = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState('USD');
  const [selectedCurrency2, setSelectedCurrency2] = useState('PLN');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Updated currency data with today's values
  const currencyData = {
    'USD': [1.00, 1.02, 1.05, 1.03, 1.04, 1.06, 1.07, 1.08, 1.10, 1.12, 1.15, 1.18], // Example rates for USD
    'PLN': [1.00, 0.98, 0.99, 1.00, 1.01, 1.02, 1.03, 1.05, 1.07, 1.08, 1.09, 1.10], // Example rates for PLN
    'EUR': [1.00, 1.01, 1.02, 1.03, 1.05, 1.06, 1.07, 1.08, 1.09, 1.11, 1.12, 1.15], // Example rates for EUR
    'GBP': [1.00, 0.99, 1.01, 1.02, 1.03, 1.04, 1.06, 1.07, 1.09, 1.10, 1.12, 1.14], // Example rates for GBP
    'CAD': [1.00, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.11, 1.12], // Example rates for CAD
    'AUD': [1.00, 1.01, 1.02, 1.03, 1.02, 1.01, 1.00, 0.99, 0.98, 0.97, 0.96, 0.95], // Example rates for AUD
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const data = {
      labels: months,
      datasets: [],
    };

    if (selectedCurrency1 !== selectedCurrency2) {
      const rates1 = currencyData[selectedCurrency1];
      const rates2 = currencyData[selectedCurrency2];

      // Calculate the exchange rate dataset
      const exchangeRates = rates1.map((rate, index) => (rate / rates2[index])).map(rate => rate.toFixed(2)); // Calculate rate as needed

      data.datasets.push({
        label: `${selectedCurrency1} to ${selectedCurrency2}`,
        data: exchangeRates,
        borderColor: '#FFCC00', // Light blue
        borderWidth: 2, // Adjust line thickness
        fill: false, // No filling under the line
      });
    }

    setChartData(data);
  }, [selectedCurrency1, selectedCurrency2]);

  // Chart options to customize grid and text colors
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#222', // Change grid color
        },
        ticks: {
          color: 'white', // Change x-axis text color to white
        },
      },
      y: {
        grid: {
          color: '#222', // Change grid color
        },
        ticks: {
          color: 'white', // Change y-axis text color to white
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Change legend text color to white
          usePointStyle: true, // Use point style instead of boxes
          generateLabels: (chart) => {
            const original = Chart.defaults.plugins.legend.labels.generateLabels;
            const labels = original(chart);
            return labels.map(label => ({
              ...label,
              // Use a line to represent the dataset instead of a rectangle
              pointStyle: 'line',
              strokeStyle: chart.data.datasets[label.datasetIndex].borderColor,
              hidden: !chart.isDatasetVisible(label.datasetIndex),
            }));
          },
        },
      },
    },
  };

  return (
    <div className="widget widgetCurrenciesGraph">
      <div className="top-row">
        <h3 style={{ color: 'white', marginRight: 'auto' }}>Currency growth trend</h3>
        <div className="currency-select-group">
          <div className="currency-select">
            <label htmlFor="currency1" style={{ color: 'white' }}></label>
            <select
              id="currency1"
              className="currency-dropdown"
              value={selectedCurrency1}
              onChange={(e) => setSelectedCurrency1(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
          </div>

          {/* Styled label for equal spacing */}
          <span style={{
            color: 'white', 
            margin: '0 15px', // Equal margin on both sides
            fontSize: '16px', // Adjust font size if needed
          }}>
            to
          </span>
          
          <div className="currency-select">
            <label htmlFor="currency2" style={{ color: 'white' }}></label>
            <select
              id="currency2"
              className="currency-dropdown"
              value={selectedCurrency2}
              onChange={(e) => setSelectedCurrency2(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divider"></div> {/* Divider added here */}
      <div className="graph-container">
        {selectedCurrency1 !== selectedCurrency2 ? (
          <Line data={chartData} options={options} />
        ) : (
          <div style={{ color: 'white' }}>Please select different currencies.</div>
        )}
      </div>
    </div>
  );
};

export default WidgetCurrenciesGraph;
