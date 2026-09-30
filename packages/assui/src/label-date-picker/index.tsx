import React from 'react';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';
import classNames from 'classnames';
import type { Moment } from 'moment';
import type { MomentDatePickerProps } from '../moment-date-picker';
import DatePicker from '../moment-date-picker';

export interface LabelDatePickerProps
  extends Omit<MomentDatePickerProps, 'label' | 'onChange'> {
  label?: React.ReactNode;
  showTime?: any;
  onChange?: (date: Moment | null, dateString: string) => void;
}

const LabelDatePicker: React.FC<LabelDatePickerProps> = (props) => {
  const { className, label, showTime } = props;
  const datePickerRef = React.useRef<any>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    defaultValuePropName: 'defaultOpen',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange: NonNullable<MomentDatePickerProps['onChange']> = (
    nextValue,
    dateString,
  ) => {
    setValue(nextValue, dateString ?? '');
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
