import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '../index';

describe('Icon', () => {
  it('passes the React 19 ref prop to its span', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Icon ref={ref} aria-label="custom icon" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" />
      </Icon>,
    );

    expect(ref.current).toBe(screen.getByRole('img', { name: 'custom icon' }));
    expect(ref.current?.querySelector('svg')).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
