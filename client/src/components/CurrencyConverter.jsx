import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState({});

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'MXN'];

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setRates(data.rates);
    } catch (err) {
      console.error('Error fetching rates:', err);
    }
  };

  const handleConvert = () => {
    setLoading(true);
    setTimeout(() => {
      const rateFrom = rates[fromCurrency] || 1;
      const rateTo = rates[toCurrency] || 1;
      const converted = (amount / rateFrom) * rateTo;
      setResult(converted.toFixed(2));
      setLoading(false);
    }, 300);
  };

  return (
    <div className="currency-converter-container">
      <div className="converter-card">
        <h1>💱 Currency Converter</h1>

        <div className="converter-form">
          <div className="input-group">
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>

          <div className="currency-group">
            <div className="input-group">
              <label>From:</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currencies.map(curr => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>

            <button className="swap-btn" onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}>
              ⇄
            </button>

            <div className="input-group">
              <label>To:</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencies.map(curr => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="btn-convert"
            onClick={handleConvert}
            disabled={loading}
          >
            {loading ? '⏳ Converting...' : '🔄 Convert'}
          </button>

          {result && (
            <div className="result">
              <p>
                <span className="amount">{amount}</span>
                <span className="currency">{fromCurrency}</span>
                <span className="equals">=</span>
                <span className="amount">{result}</span>
                <span className="currency">{toCurrency}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
