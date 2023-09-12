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

test('sets testid', () => {
  render(<Welcome dataTestId='test1' name='katre' />);
  const element = screen.getByTestId('test1');
  expect(element).toBeInTheDocument();
});
