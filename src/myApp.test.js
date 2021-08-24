import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import myApp from './myApp.js';

test('renders learn react link', () => {
  render(<myApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

export default myApp;