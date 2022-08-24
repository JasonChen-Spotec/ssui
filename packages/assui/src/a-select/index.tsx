import React from 'react';
import type { SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import useControllableValue from 'ahooks/lib/useControllableValue';

export interface ASelectProps extends SelectProps {
  valueRender?: (value: any) => React.ReactNode;
}

const ASelect = (props: ASelectProps) => {
  const { valueRender } = props;
  const [value, onChange] = useControllableValue(props);
  if (!valueRender) {
    return <Select {...props} value={value} onChange={onChange} />;
  }
  return (
    <div className="a-select-wrap">
      <div className="a-select-value-wrap">{valueRender(value)}</div>
      <Select {...props} value={value} onChange={onChange} />
    </div>
  );
};
export default ASelect;

ASelect.Option = Select.Option;
