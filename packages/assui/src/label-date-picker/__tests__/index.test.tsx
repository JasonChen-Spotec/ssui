import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelDatePicker from '../index';

const baseProps = {
  setOpen: jest.fn(),
  onChange: jest.fn(),
};

describe('LabelDatePicker', () => {
  it('label date picker base test', async () => {
    const { container } = render(<LabelDatePicker label="开始时间" {...baseProps} />);
    const labelDom = container.querySelector(
      '.label-date-picker-text',
    ) as HTMLLabelElement;

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

    // React 18 + jsdom 下通过输入框键入无法触发 antd onChange，直接点击面板日期单元格选择
    const cell = document.querySelectorAll(
      '.ant-picker-cell:not(.ant-picker-cell-disabled)',
    )[10] as HTMLElement;
    fireEvent.click(cell);

    await waitFor(() => {
      expect(document.querySelector('.ant-picker-dropdown')).toHaveClass(
        'ant-picker-dropdown-hidden',
      );
    });
    expect(baseProps.onChange).toBeCalled();
    expect(baseProps.setOpen).toBeCalledWith(false);
  });
});
