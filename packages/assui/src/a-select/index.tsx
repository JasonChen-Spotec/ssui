import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { OptionProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import classNames from 'classnames';

export interface ASelectProps extends SelectProps {
  className?: string;
  valueRender?: (value: any) => React.ReactNode;
}

const ASelect = Object.assign(
  (props: ASelectProps) => {
    const { valueRender, className, ...restProps } = props;
    const [value, onChange] = useControllableValue(props);
    if (!valueRender) {
      return (
        <Select className={className} {...restProps} value={value} onChange={onChange} />
      );
    }
    return (
      <div className={classNames('a-select-wrap', className)}>
        <div className="a-select-value-wrap">{valueRender(value)}</div>
        <Select {...restProps} value={value} onChange={onChange} />
      </div>
    );
  },
  { Option: Select.Option },
) as React.FC<ASelectProps> & { Option: React.FC<OptionProps> };

export default ASelect;
