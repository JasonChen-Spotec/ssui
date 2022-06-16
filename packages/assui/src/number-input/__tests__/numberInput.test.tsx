import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInput from '../index';

const baseProps = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
};

describe('NumberInput', () => {
  it('dataType = number and numberType = int NumberInput should work fine ', () => {
    const { getByRole, rerender } = render(<NumberInput {...baseProps} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-23.99ad fadf.' } });
    expect(input.value).toBe('2399');
    expect(baseProps.onChange).toBeCalledWith('2399');

    /** 失去焦点 返回dataType onChange 和 onChange指定类型 数据 */
    fireEvent.blur(input);
    expect(baseProps.onBlur).toBeCalledWith(2399);
    expect(baseProps.onChange).toBeCalledWith(2399);

    /** onBlur props should work fined */
    rerender(<NumberInput onBlur={undefined} />);
    fireEvent.blur(input);
  });

  it('dataType = string and numberType = float should work fine', () => {
    const { getByRole } = render(
      <NumberInput {...baseProps} numberType="float" dataType="string" />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-1-3.992ad fadf' } });
    expect(input.value).toBe('13.99');
    expect(baseProps.onChange).toBeCalledWith('13.99');

    /** 失去焦点 返回dataType onChange 和 onChange指定类型 数据 */
    fireEvent.blur(input);
    expect(baseProps.onBlur).toBeCalledWith('13.99');
    expect(baseProps.onChange).toBeCalledWith('13.99');
  });

  it('props precision and enableMinus should fine', () => {
    const resultProps = {
      ...baseProps,
      enableMinus: true,
      numberType: 'float',
      dataType: 'string',
      precision: 3,
    } as const;
    const { getByRole, rerender } = render(<NumberInput {...resultProps} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-13.99232ad fadf' } });
    expect(input.value).toBe('-13.992');
    expect(baseProps.onChange).toBeCalledWith('-13.992');

    /** 失去焦点 返回dataType onChange 和 onChange指定类型 数据 */
    fireEvent.blur(input);
    expect(baseProps.onBlur).toBeCalledWith('-13.992');
    expect(baseProps.onChange).toBeCalledWith('-13.992');

    /** 只输入点 blur后至为空 */
    fireEvent.change(input, { target: { value: '.' } });
    fireEvent.blur(input);
    expect(input.value).toBe('');

    /** 只输负号 blur后至为空 */
    fireEvent.change(input, { target: { value: '-' } });
    fireEvent.blur(input);
    expect(input.value).toBe('');

    /** float 返回 number类型 */
    rerender(<NumberInput {...resultProps} numberType="float" dataType="number" />);
    fireEvent.change(input, { target: { value: '2.33' } });
    fireEvent.blur(input);
    expect(resultProps.onChange).toHaveBeenLastCalledWith(2.33);
  });

  it('parser and formatter should work fine', () => {
    const props = {
      ...baseProps,
      formatter: jest.fn((value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
      parser: jest.fn((value) => value.replace(/\$\s?|(,*)/g, '')),
    };
    const { getByRole } = render(<NumberInput {...props} />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '-1-3.992ad fadf' } });
    expect(input.value).toBe('$ 13,992');
    expect(props.onChange).toHaveBeenLastCalledWith('13992');
  });
});
