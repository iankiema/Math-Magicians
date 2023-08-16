import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const calculate = (num1, num2, op) => {
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);

    switch (op) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value2;
    }
  };

  const handleButtonClick = (value) => {
    if (value === 'C' || value === 'AC') {
      // Clear the display and reset state
      setDisplayValue('0');
      setPrevValue(null);
      setOperator(null);
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Update prevValue and operator when an operator is pressed
      setPrevValue(displayValue);
      setOperator(value);
      setDisplayValue('');
    } else if (value === '=') {
      // Perform calculation when '=' is pressed
      if (prevValue && operator) {
        const result = calculate(prevValue, displayValue, operator);
        setDisplayValue(result.toString());
        setPrevValue(null);
        setOperator(null);
      }
    } else if (value === '.' && displayValue.includes('.')) {
      // Avoid adding multiple decimal points

    } else {
      // Update display value
      setDisplayValue((prevDisplay) => (prevDisplay === '0' || operator === prevDisplay ? value : prevDisplay + value));
    }
  };

  const renderButton = (value) => (
    <button key={value} type="button" onClick={() => handleButtonClick(value)}>
      {value}
    </button>
  );

  const renderOperatorButton = (value) => (
    <button key={value} type="button" onClick={() => handleButtonClick(value)} className="operator">
      {value}
    </button>
  );

  const renderSpecialButton = (value) => (
    <button key={value} type="button" onClick={() => handleButtonClick(value)} className="special">
      {value}
    </button>
  );

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="button-grid">
        {/* Special buttons */}
        {['AC', '%'].map((value) => renderSpecialButton(value))}
        {/* Normal buttons */}
        {['9', '8', '4', '5', '6', '7', '0', '1', '2', '3', '.'].map((value) => renderButton(value))}
      </div>
      <div className="button-grid operator-grid">
        {/* Operator buttons */}
        {['+', '-', '*', '/'].map((value) => renderOperatorButton(value))}
        {/* Equal button */}
        {['='].map((value) => renderButton(value))}
      </div>
    </div>
  );
};

export default Calculator;
