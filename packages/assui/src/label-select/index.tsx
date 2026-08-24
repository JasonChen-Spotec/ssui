import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { OptionProps, RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import classNames from 'classnames';
import isArray from 'lodash/isArray';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import type { ComplexValSelectProps } from '../complex-val-select';
import ComplexValSelect from '../complex-val-select';

export const Option: React.FC<OptionProps> = Select.Option;

export interface LabelSelectProps extends ComplexValSelectProps<any> {
  label?: React.ReactNode;
  onBlur?: (value: SelectProps['value']) => void;
}

const LabelSelect: React.ForwardRefRenderFunction<unknown, LabelSelectProps> = (
  props,
  ref,
) => {
  const { className, label, onBlur } = props;
  const selectRef = React.useRef<RefSelectProps>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  React.useImperativeHandle(ref, () => selectRef.current);

  const handleChange = (nextValue: any) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }
    (selectRef.current as RefSelectProps).focus();
  };

  const onDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const handleBlur = () => {
    onBlur?.(value);
  };

  return (
    <div
      className={classNames(
        {
          'label-select': true,
          'label-select-label-scale':
            open ||
            (!isArray(value) && !isUndefined(value) && !isNull(value)) ||
            (isArray(value) && value.length),
        },
        className,
      )}
    >
      <ComplexValSelect
        maxTagCount={3}
        showSearch={false}
        {...omit(props, ['open', 'onChange', 'className', 'label', 'setOpen', 'isFocus'])}
        open={open}
        ref={selectRef}
        size="large"
        className="label-select-selector"
        onChange={handleChange}
        onBlur={handleBlur}
        onDeselect={() => {
          selectRef.current?.focus();
        }}
        onDropdownVisibleChange={onDropdownVisibleChange}
      />
      {/* biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label */}
      <label className="label-select-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

const ForwardRefLabelSelect = React.forwardRef<unknown, LabelSelectProps>(LabelSelect);

export default ForwardRefLabelSelect;
