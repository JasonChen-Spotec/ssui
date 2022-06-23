import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepNumberInput from '../index';

const baseProps = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
};

describe('StepNumberInput', () => {
  it('base operate', () => {
    const { getByRole, getByText, container } = render(
      <StepNumberInput min={0} max={10} maxLength={4} step={4} enableMinus {...baseProps} />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    const minusSign = getByText('-');
    const addSign = getByText('+');

    fireEvent.change(input, { target: { value: '-1000asdfasdfasdf' } });
    fireEvent.blur(input);
    expect(input.value).toBe('0');
    expect(baseProps.onBlur).toBeCalledWith('0');

    /** 点击加号 */
    fireEvent.click(addSign);
    expect(input.value).toBe('4');
    expect(baseProps.onChange).toBeCalledWith('4');

    /** 点击减号 */
    fireEvent.click(minusSign);
    expect(input.value).toBe('0');
    expect(baseProps.onChange).toBeCalledWith('0');

    /** 当input无值时，步进不可点击*/
    const button = container.querySelector('.count-minus-btn.disabled-btn');
    expect(button).toBeTruthy();

    fireEvent.change(input, { target: { value: '120' } });
    expect(input.value).toBe('120');

    /** 失去焦点 */
    fireEvent.blur(input);
    expect(input.value).toBe('10');
    expect(baseProps.onBlur).toBeCalledWith('10');
    expect(button).toBeTruthy();
  });

  it('parser and formatter should work fine', () => {
    const props = {
      ...baseProps,
      formatter: jest.fn((value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
      parser: jest.fn((value) => value.replace(/\$\s?|(,*)/g, '')),
    };
    const { getByRole } = render(<StepNumberInput {...props} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-1-3.992ad fadf' } });
    expect(input.value).toBe('$ 13,992');
    expect(props.onChange).toHaveBeenLastCalledWith('13992');
  });

  it('button disabled', () => {
    const props = {
      ...baseProps,
      min: 10,
      max: 100,
    };
    const { getByRole, container } = render(<StepNumberInput {...props} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: undefined } });

    /** 当input无值时，步进不可点击*/
    const miusDisabledButton = container.querySelector('.count-minus-btn.disabled-btn');
    const addDisabledButton = container.querySelector('.count-add-btn.disabled-btn');
    expect(miusDisabledButton).toBeTruthy();
    expect(addDisabledButton).toBeTruthy();

    /** 当value等于最小值时，miusButton应为disabled*/
    fireEvent.change(input, { target: { value: 10 } });
    const miusDisabledButton1 = container.querySelector('.count-minus-btn.disabled-btn');
    const addDisabledButton1 = container.querySelector('.count-add-btn.disabled-btn');
    expect(miusDisabledButton1).toBeTruthy();
    expect(addDisabledButton1).toBeFalsy();

    /** 当value在最大值和最小值之间, button状态都因为enable*/
    fireEvent.change(input, { target: { value: 99 } });
    const miusDisabledButton2 = container.querySelector('.count-minus-btn.disabled-btn');
    const addDisabledButton2 = container.querySelector('.count-add-btn.disabled-btn');
    expect(miusDisabledButton2).toBeFalsy();
    expect(addDisabledButton2).toBeFalsy();

    /** 当value等于最大值时，addButton应为disabled*/
    fireEvent.change(input, { target: { value: 100 } });
    const miusDisabledButton3 = container.querySelector('.count-minus-btn.disabled-btn');
    const addDisabledButton3 = container.querySelector('.count-add-btn.disabled-btn');
    expect(miusDisabledButton3).toBeFalsy();
    expect(addDisabledButton3).toBeTruthy();
  });

  it('enter "-" or "." ', () => {
    const { getByRole } = render(<StepNumberInput enableMinus numberType="float" {...baseProps} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '-' } });
    expect(input.value).toBe('-');
    fireEvent.blur(input);
    expect(baseProps.onBlur).toBeCalledWith('');
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '.' } });
    expect(input.value).toBe('.');
    fireEvent.blur(input);
    expect(baseProps.onBlur).toBeCalledWith('');
    expect(input.value).toBe('');
  });

  it('when value empty click button no call onChange and onBlur', () => {
    const { getByRole, getByText } = render(<StepNumberInput {...baseProps} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: undefined } });
    const minusSign = getByText('-');
    const addSign = getByText('+');

    fireEvent.click(minusSign);
    expect(baseProps.onChange).not.toBeCalled();
    expect(baseProps.onBlur).not.toBeCalled();

    fireEvent.click(addSign);
    expect(baseProps.onChange).not.toBeCalled();
    expect(baseProps.onBlur).not.toBeCalled();
  });

  it('only max value', () => {
    const { getByRole, getByText } = render(<StepNumberInput max={10} onChange={jest.fn()} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '123' } });
    const addSign = getByText('+');

    fireEvent.click(addSign);
    expect(input.value).toBe('10');
  });

  it('only min value', () => {
    const { getByRole, getByText } = render(<StepNumberInput min={10} onChange={jest.fn()} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '10' } });
    const minusSign = getByText('-');

    fireEvent.click(minusSign);
    expect(input.value).toBe('10');
  });

  it('min value handle onBlur', () => {
    const { getByRole } = render(<StepNumberInput min={10} onChange={jest.fn()} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-1000' } });
    fireEvent.blur(input);
    expect(input.value).toBe('1000');
  });
});
