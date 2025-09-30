import '@testing-library/jest-dom';  // Add this import at the top of your test file
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my portfolio/i);
  expect(welcomeMessage).toBeInTheDocument();
});