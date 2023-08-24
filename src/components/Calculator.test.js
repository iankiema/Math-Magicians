import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Calculator updates data on button click', () => {
  const { getByText, getByTestId } = render(<Calculator />);

  // Click the '2' button
  const button = getByText('2');
  fireEvent.click(button);

  // Verify that the next display shows '2'
  const nextDisplay = getByTestId('next-display');
  expect(nextDisplay.textContent).toBe('2');
});
