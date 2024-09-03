import * as React from 'react';
import omit from 'lodash/omit';
import find from 'lodash/find';
import type { DefaultOptionType, RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import useControllableValue from 'ahooks/lib/useControllableValue';

const { Option } = Select;

export { Option };

export type ValueType = string | number | any[] | Record<string, any> | null | undefined;

export interface AllowComplexValSelectProps<T>
  extends Omit<SelectProps, 'value' | 'onChange'> {
  /** value是否使用JASON字符串 */
  useJSONStrVal?: boolean;
  value?: T;
  onChange?: (val: T, opt: SelectProps['options']) => void;
}

const AllowComplexValSelect = React.forwardRef<
  unknown,
  AllowComplexValSelectProps<ValueType>
>((props, ref) => {
  const [value, setValue] = useControllableValue(props);
  const { useJSONStrVal = false, options, onChange, onSelect } = props;
  const selectRef = React.useRef<RefSelectProps>(null);

  React.useImperativeHandle(ref, () => selectRef.current);

  const finalOptions = useJSONStrVal
    ? options?.map((item) => ({ ...item, value: JSON.stringify(item.value) }))
    : options;

  const handleChange: SelectProps<any>['onChange'] = (val) => {
    const nextVal = useJSONStrVal ? JSON.parse(val as string) : val;
    setValue(nextVal);
    onChange?.(nextVal, options);
  };

  const handleSelect = (val: ValueType) => {
    const nextVal = useJSONStrVal ? JSON.parse(val as string) : val;
    const selectOption = find(finalOptions, { value: val }) as DefaultOptionType;
    onSelect?.(nextVal, { label: selectOption.label, value: nextVal });
  };

  return (
    <Select
      ref={selectRef}
      value={useJSONStrVal ? JSON.stringify(value) : value}
      options={finalOptions}
      onChange={handleChange}
      onSelect={handleSelect}
      {...omit(props, ['value', 'onChange', 'useJSONStrVal', 'options', 'onSelect'])}
    />
  );
});

export default AllowComplexValSelect;
