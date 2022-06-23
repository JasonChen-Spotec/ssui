import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelNumberInput from '../index';

const baseProps = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onChange: jest.fn(),
};

jest.mock('ahooks/lib/useSize', () => {
  return jest.fn().mockImplementationOnce(() => {
    return { width: 50 };
  });
});

describe('LabelNumberInput', () => {
  it('input base style', () => {
    const { getByRole, queryByText, container } = render(
      <LabelNumberInput label="我是标题" baseMinWidth={100} {...baseProps} />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    const label = container.querySelector('.label-number-input-text') as HTMLLabelElement;

    expect(queryByText('我是标题')).toBeTruthy();

    label.click();
    expect(container.querySelector('.label-number-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();

    fireEvent.change(input, { target: { value: 'hello world1234' } });
    expect(input.value).toBe('1234');
    expect(baseProps.onChange).toBeCalledWith('1234');

    input.blur();
    expect(container.querySelector('.label-number-input-focused')).toBeFalsy();
    expect(input).not.toHaveFocus();
    expect(baseProps.onBlur).toBeCalledWith('1234');

    input.focus();
    expect(container.querySelector('.label-number-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();
    expect(baseProps.onFocus).toBeCalledWith(1234);
  });

  it('no focus and blur params enter', () => {
    const { getByRole } = render(<LabelNumberInput />);
    const input = getByRole('textbox');

    input.focus();
    expect(baseProps.onFocus).not.toBeCalled();

    input.blur();
    expect(baseProps.onBlur).not.toBeCalled();
  });
});
