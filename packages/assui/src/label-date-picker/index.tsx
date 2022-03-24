import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { DatePickerProps } from 'antd/lib/date-picker';
import DatePicker from 'antd/lib/date-picker';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';
import classNames from 'classnames';

export interface LabelDatePickerProps extends Omit<DatePickerProps, 'label'> {
  label?: React.ReactNode;
}

const LabelDatePicker: React.FC<LabelDatePickerProps> = (props) => {
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
          'label-date-picker': true,
          'label-date-picker-label-scale': open || value,
        },
        className,
      )}
    >
      <DatePicker
        {...props}
        open={open}
        onChange={handleChange}
        ref={datePickerRef}
        onOpenChange={onOpenChange}
        onBlur={onBlur}
        placeholder=""
        suffixIcon={<CalendarOutlined />}
      />
      <label className="label-date-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
