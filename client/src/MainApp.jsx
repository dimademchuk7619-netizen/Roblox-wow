import React, { useState } from 'react';
import DigitalClock from './components/DigitalClock';
import JokeGenerator from './components/JokeGenerator';
import RobloxTrading from './components/RobloxTrading';
import CurrencyConverter from './components/CurrencyConverter';
import './MainApp.css';

const MainApp = () => {
  const [activeApp, setActiveApp] = useState('roblox');

  const apps = [
    { id: 'roblox', name: '🎮 Roblox Trading', icon: '🎮' },
    { id: 'clock', name: '🕐 World Clock', icon: '🕐' },
    { id: 'joke', name: '😂 Joke Generator', icon: '😂' },
    { id: 'currency', name: '💱 Currency Converter', icon: '💱' }
  ];

  return (
    <div className="main-app">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <h1 className="app-logo">⚡ Multi-App Hub</h1>
          <ul className="nav-menu">
            {apps.map(app => (
              <li key={app.id}>
                <button
                  className={`nav-link ${activeApp === app.id ? 'active' : ''}`}
                  onClick={() => setActiveApp(app.id)}
                  title={app.name}
                >
                  {app.icon}
                  <span className="app-name">{app.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* App Content */}
      <div className="app-content">
        {activeApp === 'roblox' && <RobloxTrading />}
        {activeApp === 'clock' && <DigitalClock />}
        {activeApp === 'joke' && <JokeGenerator />}
        {activeApp === 'currency' && <CurrencyConverter />}
      </div>
    </div>
  );
};

export default MainApp;
