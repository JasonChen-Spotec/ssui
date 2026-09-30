import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';
import LabelRangePicker from '../index';

describe('LabelRangePicker', () => {
  it('keeps default Moment ranges without opening the calendar', () => {
    render(
      <LabelRangePicker
        label="日期范围"
        defaultValue={[moment('2026-09-01'), moment('2026-09-03')]}
      />,
    );

    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('2026/09/01');
    expect(inputs[1]).toHaveValue('2026/09/03');
    expect(document.querySelector('.ant-picker-dropdown')).toBeNull();
  });

  it('returns Moment ranges and formatted text when selecting dates', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <LabelRangePicker
        label="日期范围"
        defaultPickerValue={[moment('2026-09-01'), moment('2026-09-01')]}
        onChange={onChange}
      />,
    );

    fireEvent.click(container.querySelector('.label-range-picker-text')!);
    for (const date of ['2026-09-10', '2026-09-12']) {
      const day = await waitFor(() => {
        const cell = document.querySelector(`td[title="${date}"]`);
        expect(cell).toBeTruthy();
        return cell!;
      });
      fireEvent.click(day);
    }

    await waitFor(() => expect(onChange).toHaveBeenCalled());
    const [selected, formatted] = onChange.mock.calls[0];
    expect(selected.every(moment.isMoment)).toBe(true);
    expect(selected.map((date: moment.Moment) => date.format('YYYY-MM-DD'))).toEqual([
      '2026-09-10',
      '2026-09-12',
    ]);
    expect(formatted).toEqual(['2026/09/10', '2026/09/12']);
  });
});
