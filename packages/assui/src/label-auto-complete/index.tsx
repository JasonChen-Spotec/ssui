import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { RefSelectProps } from 'antd/es/select';
import type { AutoCompleteProps } from 'antd/es/auto-complete';
import AutoComplete from 'antd/es/auto-complete';
import classNames from 'classnames';
import { omit, trimStart } from 'lodash';

export interface LabelAutoCompleteProps extends AutoCompleteProps {
  label: React.ReactNode;
  className: string;
}

const LabelAutoComplete = (props: LabelAutoCompleteProps) => {
  const { className, label, onChange, options } = props;
  const autoComplete = React.useRef<RefSelectProps>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange = (nextValue: string) => {
    const finallyValue = trimStart(nextValue);
    setValue(finallyValue);
    onChange && onChange(finallyValue, options || []);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }
    autoComplete.current?.focus();
  };

  const onDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  return (
    <div
      className={classNames(
        {
          'label-auto-complete': true,
          'label-auto-complete-label-scale': open || value,
        },
        className,
      )}
    >
      <AutoComplete
        {...omit(props, ['open', 'onChange', 'className', 'label'])}
        open={open}
        ref={autoComplete}
        value={value}
        size="large"
        className="label-auto-complete-selector"
        onChange={handleChange}
        onDropdownVisibleChange={onDropdownVisibleChange}
      />
      <label className="label-auto-complete-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelAutoComplete;
