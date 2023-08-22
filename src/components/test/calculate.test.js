import Calculate from '../Calculate';

// Test Calculate function
test('Calculate function works correctly', () => {
  const testData = {
    total: '10',
    next: '5',
    operation: '+',
  };
  const updatedData = Calculate(testData, '2');
  expect(updatedData.total).toBe('10');
  expect(updatedData.next).toBe('52');
  expect(updatedData.operation).toBe('+');
});
