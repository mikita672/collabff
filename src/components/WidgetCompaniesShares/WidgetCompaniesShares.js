import React, { useState } from 'react';
import './WidgetCompaniesShares.css';

// Importing icons
import googleIcon from './icons/google.png';
import nvidiaIcon from './icons/nvidia.png';
import microsoftIcon from './icons/microsoft.png';
import appleIcon from './icons/apple.png';
import commerzbankIcon from './icons/commerzbank.png';

const WidgetCompanisShares = () => {
  const [dateRange, setDateRange] = useState('Today');

  // Sample data for company shares with different values for each date range
  const [companies] = useState([
    { name: 'Google', ticker: 'GGL', values: { Today: '+1.23%', 'Last Week': '-5.67%', 'Last Month': '+10.12%' }, icon: googleIcon },
    { name: 'Nvidia', ticker: 'NVD', values: { Today: '-2.12%', 'Last Week': '+3.45%', 'Last Month': '-7.89%' }, icon: nvidiaIcon },
    { name: 'Microsoft', ticker: 'MCS', values: { Today: '-1.67%', 'Last Week': '+4.56%', 'Last Month': '-8.90%' }, icon: microsoftIcon },
    { name: 'Commerzbank', ticker: 'CBK', values: { Today: '+52.13%', 'Last Week': '+133.37%', 'Last Month': '+95.67%' }, icon: commerzbankIcon },
  ]);

  // Handle dropdown change
  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  // Find the most rising company based on the selected date range
  const mostRisingCompany = companies.reduce((prev, curr) => {
    const prevChange = parseFloat(prev.values[dateRange]);
    const currChange = parseFloat(curr.values[dateRange]);
    return currChange > prevChange ? curr : prev;
  });

  return (
    <div className="company-shares-widget">
      <div className="shares-list">
        <div className="header-section">
          <label>Companies shares</label>
          <select value={dateRange} onChange={handleDateRangeChange} className="date-range-select">
            <option value="Today">Today</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
        <hr className="divider" />
        
        {companies.map((company, index) => (
          <div key={index} className="company-row">
            <div className="company-info">
              <img
                src={company.icon}
                alt={`${company.name} logo`}
                className="company-logo"
              />
              <span>{company.ticker}</span>
            </div>
            <div className={`change ${parseFloat(company.values[dateRange]) > 0 ? 'up' : 'down'}`}>
              <span>{company.values[dateRange]}</span>
              {parseFloat(company.values[dateRange]) > 0 ? '▲' : '▼'}
            </div>
          </div>
        ))}
      </div>

      {/* Right-side section */}
      <div className="right-section">
        <img src={mostRisingCompany.icon} alt={`${mostRisingCompany.name} logo`} />
        <div className="company-name">{mostRisingCompany.name}</div>
        <div className="company-change">{mostRisingCompany.values[dateRange]}</div>
      </div>

      <button className="all-companies-button">All companies</button>
    </div>
  );
};

export default WidgetCompanisShares;
