import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from '../index';

describe('TextInput', () => {
  it('There should be no spaces before', () => {
    const { getByRole } = render(<TextInput />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '       enter value' } });
    expect(input.value).toBe('enter value');
  });

  it('single regexp', () => {
    const { getByRole } = render(<TextInput regexp={/[^\dA-Za-z]+/g} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '       enter@1234####' } });
    expect(input.value).toBe('enter1234');
  });

  it('multiple regexp', () => {
    const { getByRole } = render(<TextInput regexp={[{ pattern: /\d/g, replacement: 'p' }]} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '       enter@3456####' } });
    expect(input.value).toBe('enter@pppp####');
  });
});
