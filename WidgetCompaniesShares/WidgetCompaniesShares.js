import React, { useState, useEffect } from 'react';
import './WidgetCompaniesShares.css';

// Importing icons
import googleIcon from '../icons/google.png';
import nvidiaIcon from '../icons/nvidia.png';
import microsoftIcon from '../icons/microsoft.png';
import appleIcon from '../icons/apple.png';
import commerzbankIcon from '../icons/commerzbank.png'

const WidgetCompanisShares = () => {
  const [dateRange, setDateRange] = useState('Today');

  // Sample data for company shares
  const [companies] = useState([
    { name: 'Google', ticker: 'GGL', change: '+1.234%', isUp: true, icon: googleIcon },
    { name: 'Nvidia', ticker: 'NVD', change: '-2.1212%', isUp: false, icon: nvidiaIcon },
    { name: 'Microsoft', ticker: 'MCS', change: '+1.234%', isUp: true, icon: microsoftIcon },
    { name: 'Commerzbank', ticker: 'CBK', change: '+52.234%', isUp: true, icon: commerzbankIcon},
  ]);

  // Handle dropdown change
  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  // Find the most rising company
  const mostRisingCompany = companies.reduce((prev, curr) =>
    parseFloat(curr.change) > parseFloat(prev.change) ? curr : prev
  );

  return (
    <div className="company-shares-widget">
      <div className="shares-list">
        <div className="header-section">
          <label>COMPANIES SHARES</label>
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
            <div className={`change ${company.isUp ? 'up' : 'down'}`}>
              <span>{company.change}</span>
              {company.isUp ? '▲' : '▼'}
            </div>
          </div>
        ))}
      </div>

      {/* Right-side section */}
      <div className="right-section">
        <img src={mostRisingCompany.icon} alt={`${mostRisingCompany.name} logo`} />
        <div className="company-name">{mostRisingCompany.name}</div>
        <div className="company-change">{mostRisingCompany.change}</div>
      </div>

      <button className="all-companies-button">All currencies</button>
    </div>
  );
};

export default WidgetCompanisShares;
