import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Calculate from './Calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newCalculatorData = Calculate(calculatorData, value);
    setCalculatorData(newCalculatorData);
  };
  const renderButton = (value, className) => (
    <Button key={value} value={value} className={className} onClick={handleButtonClick} />
  );

  return (
    <div className="calculator">
      <div className="button output dark-gray">{calculatorData.next || calculatorData.total || '0'}</div>
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
