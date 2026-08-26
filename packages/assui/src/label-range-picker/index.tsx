import React from 'react';
import CalendarOutlined from 'a-icons/lib/CalendarOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { RangePickerProps } from 'antd/lib/date-picker';
import DatePicker from 'antd/lib/date-picker';
import classNames from 'classnames';
import omit from 'lodash/omit';

const { RangePicker } = DatePicker;

export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
  label: React.ReactNode;
  showTime?: any;
}

const LabelDatePicker: React.FC<LabelRangePickerProps> = (props) => {
  const { className, label, showTime, ...restProps } = props;
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
          'label-range-picker-disabled': props.disabled,
          'label-range-picker-label-scale': open || value,
        },
        className,
      )}
    >
      <RangePicker
        format={showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'}
        allowEmpty={[true, true]}
        showTime={showTime}
        {...omit(restProps, 'onOpenChange')}
        separator="–"
        open={open}
        onChange={handleChange}
        ref={datePickerRef}
        onOpenChange={handleOpenChange}
        suffixIcon={<CalendarOutlined />}
      />
      {/* biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label */}
      <label className="label-range-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
