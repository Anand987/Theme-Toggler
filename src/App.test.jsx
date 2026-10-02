import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('toggles between light and dark mode', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /dark mode: on/i });
  await userEvent.click(button);
  expect(button).toHaveTextContent(/dark mode: off/i);
});
