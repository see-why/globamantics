import { render, screen } from '@testing-library/react';
import App from './mainPage';
import { unmountComponentAtNode } from 'react-dom';
import React from 'react';

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div);
  unmountComponentAtNode(div);
});
