import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { RangePickerProps } from 'antd/lib/date-picker';
import DatePicker from 'antd/lib/date-picker';
import classNames from 'classnames';
import omit from 'lodash/omit';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';

const { RangePicker } = DatePicker;

export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
  label: React.ReactNode;
  showTime?: any;
}

const LabelDatePicker: React.FC<LabelRangePickerProps> = (props) => {
  const { className, label } = props;
  const datePickerRef = React.useRef<any>(null);
  const [open, onOpenChange] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange = (nextValue: any) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      onOpenChange(!open);
    }
    datePickerRef.current?.focus();
  };

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
  };

  return (
    <div
      className={classNames(
        {
          'label-range-picker': true,
          'label-range-picker-label-scale': open || value,
        },
        className,
      )}
    >
      <RangePicker
        format="YYYY.MM.DD"
        allowEmpty={[true, true]}
        {...omit(props, 'onOpenChange')}
        separator="–"
        open={open}
        onChange={handleChange}
        ref={datePickerRef}
        onOpenChange={handleOpenChange}
        suffixIcon={<CalendarOutlined />}
      />
      <label className="label-range-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
