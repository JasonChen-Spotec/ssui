import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { BaseSelectRef } from 'rc-select';
import type { TreeSelectProps } from 'antd/lib/tree-select';
import TreeSelect from 'antd/lib/tree-select';
import classNames from 'classnames';
import omit from 'lodash/omit';

export interface LabelTreeSelectProps
  extends Omit<TreeSelectProps<string[]>, 'onDropdownVisibleChange'> {
  /** 输入框的label */
  label?: React.ReactNode;
  /** 输入框value的单位 */
  unit?: React.ReactNode;
  onDropdownVisibleChange?: (value: boolean) => void;
}

const LabelTreeSelect = (props: LabelTreeSelectProps) => {
  const { className, label, unit, showSearch = false, onDropdownVisibleChange } = props;
  const selectRef = React.useRef<BaseSelectRef>(null);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'setOpen',
  });

  const [value, setValue] = useControllableValue(props);

  const handleChange: TreeSelectProps<string | React.ReactNode>['onChange'] = (nextValue) => {
    setValue(nextValue);
  };

  const handleLabelClick = () => {
    if (!open) {
      setOpen(!open);
    }

    selectRef.current?.focus();
  };

  const handleDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onDropdownVisibleChange?.(nextOpen);
  };

  const isValueNotEmpty = !!value?.length;

  return (
    <div
      className={classNames(
        {
          'label-tree-select': true,
          'label-tree-select-label-scale': open || isValueNotEmpty,
        },
        className,
      )}
    >
      <TreeSelect
        showSearch={showSearch}
        {...omit(props, ['open', 'onChange', 'className', 'label'])}
        open={open}
        ref={selectRef}
        size="large"
        className="label-select-selector"
        onChange={handleChange}
        onDropdownVisibleChange={handleDropdownVisibleChange}
      />
      {isValueNotEmpty && (
        <div className="label-tree-select-value-length">
          <span>{value.length}</span>
          {unit && <span>{unit}</span>}
        </div>
      )}

      <label className="label-tree-select-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelTreeSelect;
