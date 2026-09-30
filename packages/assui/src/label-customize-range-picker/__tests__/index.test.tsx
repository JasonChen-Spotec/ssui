import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';
import LabelCustomizeRangePicker from '../index';

describe('LabelCustomizeRangePicker', () => {
  it.each(['label', 'origin'] as const)(
    'preserves Moment shortcut values and timezones in %s mode',
    async (rangePickerType) => {
      const onChange = jest.fn();
      const value: [moment.Moment, moment.Moment] = [
        moment.parseZone('2026-09-10T00:00:00+08:00'),
        moment.parseZone('2026-09-12T23:59:59+08:00'),
      ];
      render(
        <LabelCustomizeRangePicker
          label="日期范围"
          rangePickerType={rangePickerType}
          value={[moment('2026-09-01'), moment('2026-09-03')]}
          radioList={[{ key: 'custom', text: '自定义快捷日期', value }]}
          onChange={onChange}
        />,
      );

      expect(screen.getAllByRole('textbox')[0]).toHaveValue('2026/09/01');
      fireEvent.click(screen.getAllByRole('textbox')[0]);
      fireEvent.click(await screen.findByText('自定义快捷日期'));

      await waitFor(() => expect(onChange).toHaveBeenCalledWith(value));
      const [selected] = onChange.mock.calls[0];
      expect(selected.every(moment.isMoment)).toBe(true);
      expect(selected.map((date: moment.Moment) => date.utcOffset())).toEqual([
        480,
        480,
      ]);
    },
  );
});
