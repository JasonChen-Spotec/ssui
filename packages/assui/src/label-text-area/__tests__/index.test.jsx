import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LabelTextArea from '../index';

const baseProps = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onChange: jest.fn(),
};

describe('LabelTextArea', () => {
  it('base style', () => {
    const { getByRole, container } = render(
      <LabelTextArea label="我是标题" formatter={(value) => `${value} chen`} {...baseProps} />,
    );
    const textarea = getByRole('textbox');
    const textareaWrap = container.querySelector('.label-textarea-warper');

    textareaWrap.click();
    expect(container.querySelector('.textarea-warper-focused')).toBeTruthy();

    fireEvent.change(textarea, { target: { value: '      long' } });
    expect(textarea.value).toBe('long chen');
    expect(baseProps.onChange).toBeCalledWith('long chen');

    textarea.blur();
    expect(container.querySelector('.textarea-warper-focused')).toBeFalsy();
    expect(baseProps.onBlur).toBeCalledWith('long chen');

    textarea.focus();
    expect(container.querySelector('.textarea-warper-focused')).toBeTruthy();
    expect(baseProps.onFocus).toBeCalledWith('long chen');
  });

  it('no focus and blur params enter', () => {
    const { getByRole } = render(<LabelTextArea label="我是标题" />);
    const textarea = getByRole('textbox');

    textarea.focus();
    expect(baseProps.onFocus).not.toBeCalled();

    textarea.blur();
    expect(baseProps.onBlur).not.toBeCalled();
  });
});
