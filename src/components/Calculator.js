import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';

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

  // const handleButtonKeyPress = (event, value) => {
  //   if (event.key === 'Enter') {
  //     handleButtonClick(value);
  //   }
  // };

  const renderButton = (value, className) => (
    <Button key={value} value={value} className={className} onClick={handleButtonClick} />
  );

  return (
    <div className="calculator">
      <div className="button output dark-gray">{displayValue}</div>
      {renderButton('AC', 'button')}
      {renderButton('+/-', 'button')}
      {renderButton('%', 'button')}
      {renderButton('/', 'button orange')}
      {renderButton('7', 'button')}
      {renderButton('8', 'button')}
      {renderButton('9', 'button')}
      {renderButton('*', 'button orange')}
      {renderButton('4', 'button')}
      {renderButton('5', 'button')}
      {renderButton('6', 'button')}
      {renderButton('-', 'button orange')}
      {renderButton('1', 'button')}
      {renderButton('2', 'button')}
      {renderButton('3', 'button')}
      {renderButton('+', 'button orange')}
      {renderButton('0', 'button zero')}
      {renderButton('.', 'button')}
      {renderButton('=', 'button orange')}
    </div>
  );
};
export default Calculator;
