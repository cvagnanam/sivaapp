import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChildOne from './ChildOne';

describe('ChildOne Component', () => {
  test('renders Child One Component', () => {
    render(<ChildOne />);
    screen.debug();

    expect(screen.getByText('Child ONe Component')).toBeInTheDocument();

  });


});
