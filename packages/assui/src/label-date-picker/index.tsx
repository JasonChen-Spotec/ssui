import React from 'react';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd/lib/date-picker';
import classNames from 'classnames';

export interface LabelDatePickerProps extends Omit<DatePickerProps, 'label'> {
  label?: React.ReactNode;
  showTime?: any;
}

const LabelDatePicker: React.FC<LabelDatePickerProps> = (props) => {
  const { className, label, showTime } = props;
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
    (datePickerRef.current as any).focus();
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
        format={showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'}
        {...props}
        open={open}
        onChange={handleChange}
        ref={datePickerRef}
        onOpenChange={onOpenChange}
        onBlur={onBlur}
        placeholder=""
        suffixIcon={<CalendarOutlined />}
      />
      {/* biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label */}
      <label className="label-date-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
