import { render, screen } from '@testing-library/react';
import App from './app';

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/sample app/i);
  expect(headerElement).toBeInTheDocument();
});
