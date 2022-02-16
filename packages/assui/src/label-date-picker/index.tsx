import React from 'react';
import { useControllableValue } from 'ahooks';
import type { RefDate } from 'antd/es/';
import DatePicker from 'antd/es/date-picker';

const LabelDatePicker = (props: any) => {
  const { className, label } = props;
  const selectRef = React.useRef<RefSelectProps>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange: SelectProps<string | React.ReactNode>['onChange'] = (nextValue) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }
    selectRef.current?.focus();
  };

  const onDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };
  function onChange(date: any) {
    console.log(date);
  }

  return (
    <div
      className={classNames(
        {
          'label-select': true,
          'label-select-label-scale': open || value,
        },
        className,
      )}
    >
      <DatePicker onChange={onChange} />
      <label className="label-date-picker-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
