import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { RangePickerProps } from 'antd/es/date-picker';
import DatePicker from 'antd/es/date-picker';
import classNames from 'classnames';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';

const { RangePicker } = DatePicker;

export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
  label: React.ReactNode;
}

const LabelDatePicker: React.FC<LabelRangePickerProps> = (props) => {
  const { className, label } = props;
  const datePickerRef = React.useRef<any>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange = (nextValue: any) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }
    datePickerRef.current?.focus();
  };

  const onBlur = () => {
    setOpen(false);
  };

  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
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
        {...props}
        separator="–"
        open={open}
        onChange={handleChange}
        ref={datePickerRef}
        onOpenChange={onOpenChange}
        onBlur={onBlur}
        suffixIcon={<CalendarOutlined />}
      />
      <label className="label-range-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
