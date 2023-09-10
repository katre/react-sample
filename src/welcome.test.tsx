import { render, screen } from '@testing-library/react';
import Welcome from './welcome';

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

test('renders name', () => {
  render(<Welcome name='katre' />);
  const element = screen.getByText(/katre/i);
  expect(element).toBeInTheDocument();
});

