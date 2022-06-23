import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelConditionInput from '../index';

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

describe('LabelConditionInput', () => {
  it('input base style', () => {
    const { getByRole, container } = render(
      <LabelConditionInput label="我是标题" baseMinWidth={100} {...baseProps} />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    const label = container.querySelector('.label-condition-input-text') as HTMLLabelElement;

    label.click();
    expect(container.querySelector('.label-condition-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();

    fireEvent.change(input, { target: { value: 'hello world1234' } });
    expect(input.value).toBe('hello world1234');
    expect(baseProps.onChange).toBeCalledWith('hello world1234');

    input.blur();
    expect(container.querySelector('.label-condition-input-focused')).toBeFalsy();
    expect(input).not.toHaveFocus();
    expect(baseProps.onBlur).toBeCalledWith('hello world1234');

    input.focus();
    expect(container.querySelector('.label-condition-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();
    expect(baseProps.onFocus).toBeCalledWith('hello world1234');
  });

  it('no focus and blur params enter', () => {
    const { getByRole } = render(<LabelConditionInput label="我是标题" />);
    const input = getByRole('textbox');

    input.focus();
    expect(baseProps.onFocus).not.toBeCalled();

    input.blur();
    expect(baseProps.onBlur).not.toBeCalled();
  });
});
