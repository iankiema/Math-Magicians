import React from 'react';
import Calculator from '../components/Calculator';
import Navigation from './Navigation';
import './Home.css';

const CalculatorPage = () => (
  <div className="home">
    <header className="app-header">
      <h1>Math Magicians</h1>
      <Navigation />
    </header>
    <h1>Calculator</h1>
    <div className="calculator-container">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
