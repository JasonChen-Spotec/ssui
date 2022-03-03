import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { TreeSelectProps, RefTreeSelectProps } from 'antd/es/tree-select';
import TreeSelect from 'antd/es/tree-select';
import classNames from 'classnames';
import omit from 'lodash/omit';

export interface LabelTreeSelectProps extends TreeSelectProps<string[]> {
  /** 输入框的label */
  label: React.ReactNode;
  /** 输入框value的单位 */
  unit?: React.ReactNode;
}

const LabelTreeSelect = (props: LabelTreeSelectProps) => {
  const { className, label, unit, showSearch = false } = props;
  const selectRef = React.useRef<RefTreeSelectProps>(null);
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

  const onDropdownVisibleChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
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
        onDropdownVisibleChange={onDropdownVisibleChange}
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

LabelTreeSelect.Option = Option;
