import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';
import LabelDatePicker from '../index';

const baseProps = {
  setOpen: jest.fn(),
  onChange: jest.fn(),
};

describe('LabelDatePicker', () => {
  it('keeps default Moment values without opening the calendar', () => {
    const value = moment('2026-09-12');
    const { container } = render(
      <LabelDatePicker label="日期" defaultValue={value} />,
    );

    expect(screen.getByRole('textbox')).toHaveValue('2026/09/12');
    expect(container.querySelector('.label-date-picker-label-scale')).toBeTruthy();
    expect(document.querySelector('.ant-picker-dropdown')).toBeNull();
    expect(value.format('YYYY-MM-DD')).toBe('2026-09-12');
  });

  it('returns Moment values and formatted text when selecting a date', async () => {
    const onChange = jest.fn<void, [moment.Moment | null, string]>();
    const value = moment('2026-09-12');
    const { container } = render(
      <LabelDatePicker label="日期" value={value} onChange={onChange} />,
    );

    fireEvent.click(container.querySelector('.label-date-picker-text')!);
    const day = await waitFor(() => {
      const cell = document.querySelector('td[title="2026-09-15"]');
      expect(cell).toBeTruthy();
      return cell!;
    });
    fireEvent.click(day);

    await waitFor(() => expect(onChange).toHaveBeenCalled());
    const [selected, formatted] = onChange.mock.calls[0];
    expect(moment.isMoment(selected)).toBe(true);
    expect(selected?.format('YYYY-MM-DD')).toBe('2026-09-15');
    expect(formatted).toBe('2026/09/15');
    expect(value.format('YYYY-MM-DD')).toBe('2026-09-12');
  });

  it('preserves the null date and empty string callback when clearing', async () => {
    const onChange = jest.fn<void, [moment.Moment | null, string]>();
    const { container } = render(
      <LabelDatePicker defaultValue={moment('2026-09-12')} onChange={onChange} />,
    );

    fireEvent.click(container.querySelector('.ant-picker-clear')!);

    await waitFor(() => expect(onChange).toHaveBeenCalledWith(null, ''));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('label date picker base test', async () => {
    const { container } = render(<LabelDatePicker label="开始时间" {...baseProps} />);
    const labelDom = container.querySelector(
      '.label-date-picker-text',
    ) as HTMLLabelElement;

    expect(labelDom).toHaveTextContent('开始时间');

    await waitFor(() => {
      fireEvent.click(labelDom);
    });

    const pickerDropdown = document.querySelector('.ant-picker-dropdown');

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
