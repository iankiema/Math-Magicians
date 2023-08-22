import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

// Mock the fetch function globally
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([{ quote: 'Fake quote for testing' }]),
}));

describe('Quote component', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(<Quote />);

    // Use toMatchSnapshot to compare the rendered output with a snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
