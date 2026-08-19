import React from 'react';
import type { SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import classNames from 'classnames';
import useControllableValue from 'ahooks/lib/useControllableValue';

export interface ASelectProps extends SelectProps {
  className?: string;
  valueRender?: (value: any) => React.ReactNode;
}

const ASelect = (props: ASelectProps) => {
  const { valueRender, className, ...restProps } = props;
  const [value, onChange] = useControllableValue(props);
  if (!valueRender) {
    return <Select className={className} {...restProps} value={value} onChange={onChange} />;
  }
  return (
    <div className={classNames('a-select-wrap', className)}>
      <div className="a-select-value-wrap">{valueRender(value)}</div>
      <Select {...restProps} value={value} onChange={onChange} />
    </div>
  );
};
export default ASelect;

ASelect.Option = Select.Option;
