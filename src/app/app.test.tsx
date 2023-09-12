import { render, fireEvent, screen } from '@testing-library/react';
import App from './app';

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/sample app/i);
  expect(headerElement).toBeInTheDocument();
});

test('updates name', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/who/i);
  const welcomeElement = screen.getByTestId('welcome');
  expect(inputElement).toBeInTheDocument();
  expect(welcomeElement).toBeInTheDocument();

  // check the default
  expect(welcomeElement).toHaveTextContent(/guest/i);

  // change the value
  fireEvent.change(inputElement, {target: {value: 'Bob'}});
  expect(welcomeElement).toHaveTextContent(/bob/i);
});
