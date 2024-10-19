import React, { useEffect, useState } from 'react';
import './WidgetExchangeRates.css'; // Import your widget styles

const WidgetExchangeRates = () => {
    const [rates, setRates] = useState({});
    const [simulatedRates, setSimulatedRates] = useState({});
    const [error, setError] = useState(null);
    const [baseCurrency, setBaseCurrency] = useState('USD'); // Default base currency
    const [date, setDate] = useState(new Date()); // Date for data
    const today = new Date(); // Today's date for comparison

    // Replace with your actual API key
    const API_KEY = 'e2695b1ddcb4ea1696d6bf0e'; // Your API key

    // Currencies list (15 most popular)
    const popularCurrencies = ['USD', 'EUR', 'PLN', 'CNY', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'NZD', 'SEK', 'NOK', 'ZAR', 'BRL', 'INR'];
    const displayedCurrencies = ['USD', 'EUR', 'PLN']; // Only USD, EUR, and PLN

    const currencyToFlag = {
        EUR: 'eu', USD: 'us', PLN: 'pl', CNY: 'cn', GBP: 'gb', JPY: 'jp',
        CAD: 'ca', AUD: 'au', CHF: 'ch', NZD: 'nz', SEK: 'se', NOK: 'no',
        ZAR: 'za', BRL: 'br', INR: 'in'
    };

    const handlePreviousDay = () => setDate(new Date(date.setDate(date.getDate() - 1)));
    const handleNextDay = () => {
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        if (nextDate <= today) setDate(nextDate);
    };

    const formatDate = (date) => date.toISOString().split('T')[0];

    useEffect(() => {
        const fetchExchangeRates = async () => {
            setError(null); // Clear any previous errors

            try {
                const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;
                const response = await fetch(url);
                const data = await response.json();

                if (data.result === 'error') {
                    throw new Error(data['error-type'] || 'Failed to fetch exchange rates');
                }

                if (data.conversion_rates) {
                    console.log('Rates received:', data.conversion_rates);
                    setRates(data.conversion_rates);

                    // Simulate random rates based on today's rates
                    const simulated = {};
                    Object.keys(data.conversion_rates).forEach(currency => {
                        const rate = data.conversion_rates[currency];
                        // Simulate a random change (between -0.05 and 0.05 for example)
                        const simulatedRate = (rate * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2);
                        simulated[currency] = simulatedRate;
                    });
                    setSimulatedRates(simulated);
                } else {
                    throw new Error('No rates found');
                }
            } catch (err) {
                setError(err.message);
                console.error('Error fetching rates:', err);
            }
        };

        fetchExchangeRates();
    }, [baseCurrency]);

    // Generate random rates for past dates based on today's rates
    const generateRandomRates = (baseRate) => {
        const simulated = {};
        Object.keys(rates).forEach(currency => {
            const rate = rates[currency];
            // Simulate a random change
            const simulatedRate = (rate * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2);
            simulated[currency] = simulatedRate;
        });
        return simulated;
    };

    // Update simulated rates based on the selected date
    useEffect(() => {
        if (date < today) {
            const simulated = generateRandomRates(rates);
            setSimulatedRates(simulated);
        }
    }, [date, rates]);

    // Buy rate: the amount of the base currency needed to buy 1 unit of target currency
    const calculateBuyRate = (currency) => {
        if (!rates[currency]) return 'N/A';
        return rates[currency].toFixed(2); // Rate is how much of base currency needed to buy 1 unit of target currency
    };
    
    const calculateSellRate = (currency) => {
        if (!rates[currency]) return 'N/A';
        return (1 / rates[currency]).toFixed(2); // How much target currency you get for selling 1 unit of base currency
    };

    return (
        <div className="widget">
            <div className="top-row">
                <div className="currency-select">
                    <label htmlFor="base-currency">Exchange rates</label>
                    <select
                        id="base-currency"
                        value={baseCurrency}
                        onChange={(e) => setBaseCurrency(e.target.value)}
                    >
                        {popularCurrencies.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="date-selector">
                    <button onClick={handlePreviousDay}>&lt;</button>
                    <span>{date.toLocaleDateString()}</span>
                    <button onClick={handleNextDay} disabled={date >= today}>&gt;</button>
                </div>

            </div>
            <hr className="divider" />
    
            {error && <p>Error: {error}</p>}
            {!Object.keys(rates).length && !error && <p>Loading...</p>} {/* Loading state */}

            <div className="exchange-rate-table">
                <div className="exchange-rate-header">
                    <div className="currency-info-label">Currency</div>
                    <div className="rate-container-label">
                        <span>Buy</span>
                        <span>Sell</span>      
                    </div>
                </div>
    
                {displayedCurrencies.map((currency) => (
                    <div className="exchange-rate-row" key={currency}>
                        <div className="currency-info">
                            <img
                                src={`https://flagcdn.com/${currencyToFlag[currency]}.svg`}
                                alt={`${currency} Flag`}
                            />
                            <span>{currency}</span>
                        </div>
                        <div className="rate-container">
                            {/* Use simulated rates for historical dates */}
                            <span>{date < today ? simulatedRates[currency] : calculateBuyRate(currency)}</span>
                            <span>{(1 / (date < today ? simulatedRates[currency] : rates[currency])).toFixed(2) || 'N/A'}</span>
                        </div>
                    </div>
                ))}
            </div>
    
            <button className="store-button">All currencies</button>
        </div>
    );
};

export default WidgetExchangeRates;
