import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import type { BaseSelectRef } from 'rc-select/lib/BaseSelect';
import { isUndefined, isNull } from 'lodash';
import classNames from 'classnames';
import ArrowDropDownFilled from 'a-icons/lib/ArrowDropDownFilled';
import omit from 'lodash/omit';

const { Option } = Select;

export { Option };

export interface LabelSelectProps extends SelectProps {
  label?: React.ReactNode;
}

const LabelSelect: React.ForwardRefRenderFunction<unknown, LabelSelectProps> = (
  props,
  ref,
) => {
  const { className, label } = props;
  const selectRef = React.useRef<RefSelectProps>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  React.useImperativeHandle(ref, () => selectRef.current);

  const handleChange: SelectProps<string | React.ReactNode>['onChange'] = (nextValue) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }
    (selectRef.current as BaseSelectRef).focus();
  };

  const onDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  return (
    <div
      className={classNames(
        {
          'label-select': true,
          'label-select-label-scale': open || (!isUndefined(value) && !isNull(value)),
        },
        className,
      )}
    >
      <Select
        maxTagCount={3}
        showSearch={false}
        {...omit(props, ['open', 'onChange', 'className', 'label', 'setOpen', 'isFocus'])}
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

// export default LabelSelect;

const ForwardRefLabelSelect = React.forwardRef<unknown, LabelSelectProps>(LabelSelect);

export default ForwardRefLabelSelect;
