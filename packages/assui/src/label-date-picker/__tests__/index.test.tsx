import React from 'react';
import { fireEvent, render, waitFor, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelDatePicker from '../index';

const baseProps = {
  setOpen: jest.fn(),
  onChange: jest.fn(),
};

describe('LabelDatePicker', () => {
  it('label date picker base test', async () => {
    const { container, getByRole } = render(<LabelDatePicker label="开始时间" {...baseProps} />);
    const input = getByRole('textbox');
    const labelDom = container.querySelector('.label-date-picker-text') as HTMLLabelElement;

    expect(labelDom).toHaveTextContent('开始时间');

    await waitFor(() => {
      fireEvent.click(labelDom);
    });

    const pickerDropdown = await screen.queryByText(
      (_, element) => element?.className === 'ant-picker-dropdown',
    );

    expect(pickerDropdown).not.toHaveClass('ant-picker-dropdown-hidden');

    expect(container.querySelector('.ant-picker-focused')).toBeTruthy();
    expect(baseProps.setOpen).toBeCalledWith(true);

    act(() => {
      fireEvent.change(input, { target: { value: '1996-08-10' } });
    });

    fireEvent.click(document.querySelectorAll('.ant-picker-cell-selected')[0]);

    expect(pickerDropdown).toHaveClass('ant-picker-dropdown-hidden');

    input.blur();

    expect(baseProps.setOpen).toBeCalledWith(false);
  });
});
