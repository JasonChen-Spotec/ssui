import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelInput from '../index';

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

describe('LabelInput', () => {
  it('label input base style', () => {
    const { getByRole, container } = render(<LabelInput label="我是标题" {...baseProps} />);
    const input = getByRole('textbox');
    const label = container.querySelector('.label-input-text') as HTMLLabelElement;

    label.click();
    expect(container.querySelector('.label-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();

    input.blur();
    expect(container.querySelector('.label-input-focused')).toBeFalsy();
    expect(input).not.toHaveFocus();

    input.focus();
    expect(container.querySelector('.label-input-focused')).toBeTruthy();
    expect(input).toHaveFocus();

    fireEvent.change(input, { target: { value: 'hello world' } });
    expect(baseProps.onChange).toBeCalledWith('hello world');
  });

  it('type of password', () => {
    const { getByRole, container } = render(
      <LabelInput label="我是标题" type="password" {...baseProps} />,
    );

    const eyeIcon = getByRole('img');
    eyeIcon.click();
    expect(container.querySelector('.label-input-open-eye')).toBeTruthy();

    const eyeIcon2 = getByRole('img');
    eyeIcon2.click();
    expect(container.querySelector('.label-input-open-eye')).toBeFalsy();
  });

  it('has prefix params enter', () => {
    const { container, rerender } = render(<LabelInput label="我是标题" {...baseProps} />);

    expect(container.querySelector('.label-input-prefix')).toBeFalsy();

    rerender(<LabelInput label="我是标题" prefix={123} {...baseProps} />);

    expect(container.querySelector('.label-input-prefix')).toBeTruthy();
  });

  it('has baseMinWidth params enter', () => {
    jest.doMock('ahooks/lib/useSize', () => {
      return jest.fn().mockImplementation(() => ({}));
    });
    render(<LabelInput label="我是标题" baseMinWidth={100} />);
  });

  it('no focus and blur params enter', () => {
    const { getByRole } = render(<LabelInput label="我是标题" />);
    const input = getByRole('textbox');

    input.focus();
    expect(baseProps.onBlur).not.toBeCalled();

    input.blur();
    expect(baseProps.onBlur).not.toBeCalled();
  });
});
