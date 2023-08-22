import Operate from '../Operate';

// Test Operate function
test('Operate function works correctly for addition', () => {
  expect(Operate('2', '3', '+')).toBe('5');
});

test('Operate function works correctly for subtraction', () => {
  expect(Operate('5', '3', '-')).toBe('2');
});

test('Operate function works correctly for multiplication', () => {
  expect(Operate('2', '3', '*')).toBe('6');
});

test('Operate function works correctly for division', () => {
  expect(Operate('6', '3', '/')).toBe('2');
});

test('Operate function works correctly for modulo', () => {
  expect(Operate('7', '3', '%')).toBe('1');
});
