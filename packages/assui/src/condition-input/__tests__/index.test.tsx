import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ConditionInput from '../index';

const baseProps = {
  onChange: jest.fn(),
};

describe('ConditionInput', () => {
  it('formatter', () => {
    const { getByRole } = render(
      <ConditionInput
        regexp={/[^A-Za-z]+/g}
        formatter={(value) => value.toUpperCase()}
        {...baseProps}
      />,
    );
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'hello world' } });
    expect(input.value).toBe('HELLOWORLD');
  });

  it('regexp is string array', () => {
    const { getByRole } = render(<ConditionInput regexp={['\\d']} {...baseProps} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'hello world 2022' } });
    expect(input.value).toBe('hello world 022');
  });

  it('regexp is object array', () => {
    const { getByRole } = render(
      <ConditionInput regexp={[{ pattern: /\d/g, replacement: '*' }]} {...baseProps} />,
    );
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'hello world 2022' } });
    expect(input.value).toBe('hello world ****');
  });

  it('when regexp is any', () => {
    const { getByRole } = render(<ConditionInput regexp={[undefined as any]} {...baseProps} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'hello world 2022' } });
    expect(input.value).toBe('hello world 2022');
  });
});
