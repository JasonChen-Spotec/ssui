import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import LabelTextArea from '../index';

const baseProps = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onChange: jest.fn(),
};

describe('LabelTextArea', () => {
  it('base style', () => {
    const { getByRole, queryByText, container } = render(
      <LabelTextArea
        label="我是标题"
        formatter={(value) => `${value} chen`}
        {...baseProps}
      />,
    );
    const textarea = getByRole('textbox');
    const textareaWrap = container.querySelector('.label-textarea-warper');

    expect(queryByText('我是标题')).toBeTruthy();

    act(() => textareaWrap.click());
    expect(container.querySelector('.textarea-warper-focused')).toBeTruthy();

    fireEvent.change(textarea, { target: { value: '      long' } });
    expect(textarea.value).toBe('long chen');
    expect(baseProps.onChange).toBeCalledWith('long chen');

    act(() => textarea.blur());
    expect(container.querySelector('.textarea-warper-focused')).toBeFalsy();
    expect(baseProps.onBlur).toBeCalledWith('long chen');

    act(() => textarea.focus());
    expect(container.querySelector('.textarea-warper-focused')).toBeTruthy();
    expect(baseProps.onFocus).toBeCalledWith('long chen');
  });

  it('no focus and blur params enter', () => {
    const { getByRole } = render(<LabelTextArea />);
    const textarea = getByRole('textbox');

    textarea.focus();
    expect(baseProps.onFocus).not.toBeCalled();

    textarea.blur();
    expect(baseProps.onBlur).not.toBeCalled();
  });
});
