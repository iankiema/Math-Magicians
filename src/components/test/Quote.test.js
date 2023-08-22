import React from 'react';
import { render, waitForElementToBeRemoved, queryByText } from '@testing-library/react';
import axios from 'axios';
import Quote from '../Quote';

jest.mock('axios');

test('Quote component renders correctly', () => {
  const { container, getByText } = render(<Quote />);

  expect(getByText('Loading...')).toBeInTheDocument();

  expect(queryByText('Error:')).not.toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

test('Quote component displays error message correctly', async () => {
  axios.get.mockRejectedValueOnce(new Error('Test Error'));

  const { container, getByText } = render(<Quote />);

  await waitForElementToBeRemoved(() => getByText('Loading...'));

  expect(getByText('Error: Test Error')).toBeInTheDocument();

  expect(queryByText('Loading...')).not.toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
