import React from 'react';
import { useControllableValue } from 'ahooks';
import type { RefSelectProps, SelectProps } from 'antd/es/select';
import Select from 'antd/es/select';
import classNames from 'classnames';
import ArrowDropDownFilled from 'a-icons/lib/ArrowDropDownFilled';
import { omit } from 'lodash';

const { Option } = Select;

export { Option };

export interface LabelSelectProps extends SelectProps<string> {
  label: React.ReactNode;
}

const LabelSelect = (props: LabelSelectProps) => {
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
      <Select
        {...omit(props, ['open', 'onChange', 'className', 'label'])}
        open={open}
        ref={selectRef}
        size="large"
        className="label-select-selector"
        onChange={handleChange}
        onDropdownVisibleChange={onDropdownVisibleChange}
        suffixIcon={<ArrowDropDownFilled />}
      />
      <label className="label-select-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelSelect;

LabelSelect.Option = Option;