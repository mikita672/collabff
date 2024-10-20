/*AmCharts*/
import React, { useEffect } from 'react';

const ChartComponent = () => {
  useEffect(() => {
    const loadAmCharts = async () => {
      const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = resolve;
          document.body.appendChild(script);
        });
      };

      await loadScript('https://www.amcharts.com/lib/3/amcharts.js');
      await loadScript('https://cdn.amcharts.com/lib/3/pie.js');
      await loadScript('https://www.amcharts.com/lib/3/themes/dark.js');

      window.AmCharts.makeChart('chartdiv', {
        "hideCredits": true,
        type: 'pie',
        balloonText: "<u>[[title]]</u><br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        innerRadius: '70%',  // Adjust this value as needed
        labelRadius: 30,
        valueWidth: 100,
        minRadius:80,
        labelText: '',
        startAngle: 0,
        baseColor: '#88A276',
        gradientRatio: [],
        hoverAlpha: 0.8,
        labelTickAlpha: 0,
        tabIndex: -1,
        titleField: 'category',
        valueField: 'column-1',
        accessibleTitle: '',
        backgroundAlpha: 0.71,
        backgroundColor: 'transparent',
        fontFamily: 'Inter',
        fontSize: 16,
        processCount: 999,
        theme: 'dark',
        balloon: {
          animationDuration: 0,
          fadeOutDuration: 0,
        },
        legend: {
          enabled: true,
          align: 'center',
          backgroundAlpha: 0.04,
          marginTop: 60,
          backgroundColor: '#003030',
          color: '#E7E7E7',
          fontSize: 22,
          markerSize: 20,
          markerType: 'diamond',
          position: 'right',
        },
        titles: [
          {
            id: 'Title-2',
            size: 20,
            text: 'Expenses for last month',
            bold: false,
            color: '#FFFFFF',
          }
        ],
        dataProvider: [
          { category: 'Salaries', 'column-1': '50' },
          { category: 'Materials', 'column-1': '25' },
          { category: 'Emergencies', 'column-1': '15' },
          { category: 'Logistics', 'column-1': '15' },
        ]
      });
    };

    loadAmCharts();
  }, []);

  return (
    <div style={widgetStyle}>
      <div id="chartdiv" style={chartStyle}></div>
      <div style={lineStyle}></div>
    </div>
  );
};

const chartStyle = {
  width: '100%', // Change this to '600px' or whatever size you prefer
  height: '100%', // Change this to '400px' or whatever size you prefer
  margin: '0 auto',
};

const widgetStyle = {
  backgroundColor: '#005050',
  padding: '20px',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  width: '580px', // Change width here if needed
  height: '308px', // Change height here if needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',  // To properly overlay the line
};

const lineStyle = {
  position: 'absolute',
  top: '20%', // Position of the line
  left: 0,
  width: '90%',
  marginLeft: '24px',
  height: '2px', // Thickness of the line
  backgroundColor: '#FFFFFF', // Color of the line
};

export default ChartComponent;
