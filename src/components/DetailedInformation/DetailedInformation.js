import React from 'react';
import './DetailedInformation.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import WidgetCurrenciesGraph from '../WidgetCurrenciesGraph/WidgetCurrenciesGraph';
import WidgetCurrenciesRates from '../WidgetExchangedRates/WidgetExchangeRates';
import WidgetCurrenciesShares from '../WidgetCompaniesShares/WidgetCompaniesShares';
import ChartComponent from '../WidgetPieChartExpenses/ChartComponent';
import WidgetSharesGraph from '../WidgetSharesGraph/WidgetSharesGraph';
import WidgetInOutComesGraph from '../WidgetInOutComesGraph/WidgetInOutComesGraph';

const ResponsiveGridLayout2 = WidthProvider(Responsive);

const DetailedInformation = () => {


    const layout = [
        { i: 'widgetCurrenciesGraph', x: 0, y: 0, w: 7, h: 1 },
        { i: 'widgetCurrenciesRates', x: 7, y: 0, w: 5, h: 1 },
        { i: 'widgetCurrenciesShares', x: 0, y: 1, w: 5, h: 1 },
        { i: 'widgetSharesGraph', x: 5, y: 1, w: 7, h: 1 },
        { i: 'chartComponent', x: 0, y: 2, w: 6, h: 1 },
        { i: 'widgetInOutComesGraph', x: 6, y: 2, w: 6, h: 1 },
    ];

    return (
        <div className="detailed-information">

            <div className="detailed-information-wrapper">
                <h1 className="detailed-information-title">Detailed Information</h1>

                <ResponsiveGridLayout2
                    className="layout"
                    layouts={{ lg: layout }}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 12 }}
                    rowHeight={350}
                >
                    <div key="widgetCurrenciesGraph">
                        <WidgetCurrenciesGraph />
                    </div>
                    <div key="widgetCurrenciesRates">
                        <WidgetCurrenciesRates />
                    </div>
                    <div key="widgetCurrenciesShares">
                        <WidgetCurrenciesShares />
                    </div>
                    <div key="widgetSharesGraph">
                        <WidgetSharesGraph />
                    </div>
                    <div key="chartComponent">
                        <ChartComponent />
                    </div>
                    <div key="widgetInOutComesGraph">
                        <WidgetInOutComesGraph />
                    </div>
                </ResponsiveGridLayout2>


                {/* <div className="widget-container" data-type='1'>
                    <WidgetCurrenciesGraph />
                    <WidgetCurrenciesRates />
                </div>
                <div className="widget-container" data-type="2">
                    <WidgetCurrenciesShares />
                    <WidgetSharesGraph />
                </div>
                <div className="widget-container" data-type="1">
                    <ChartComponent />
                    <WidgetInOutComesGraph />
                </div> */}
            </div>


        </div>
    );
};

export default DetailedInformation;
