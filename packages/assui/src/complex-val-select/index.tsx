import * as React from 'react';
import omit from 'lodash/omit';
import find from 'lodash/find';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import type { DefaultOptionType, RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import useControllableValue from 'ahooks/lib/useControllableValue';

const { Option } = Select;

export { Option };

export type ValueType = string | number | any[] | Record<string, any> | null | undefined;

export interface ComplexValSelectProps<T>
  extends Omit<SelectProps, 'value' | 'onChange'> {
  value?: T;
  onChange?: (val: T, opt: SelectProps['options']) => void;
}

const ComplexValSelect = React.forwardRef<unknown, ComplexValSelectProps<ValueType>>(
  (props, ref) => {
    const [value, setValue] = useControllableValue(props);
    const { options, onChange, onSelect } = props;
    const selectRef = React.useRef<RefSelectProps>(null);

    React.useImperativeHandle(ref, () => selectRef.current);

    // 判断是否需要将optionValue转为JSON字符串
    const isReferenceTypeVal = some(
      options,
      (item) => isArray(item.value) || isObject(item.value),
    );

    const finalOptions: DefaultOptionType[] | undefined = isReferenceTypeVal
      ? options?.map((item) => ({
          ...item,
          value: JSON.stringify(item.value),
        }))
      : options;

    const handleChange: SelectProps['onChange'] = (val) => {
      const nextVal = isReferenceTypeVal ? JSON.parse(val as string) : val;
      setValue(nextVal);
      onChange?.(nextVal, options);
    };

    const handleSelect = (val: ValueType) => {
      const nextVal = isReferenceTypeVal ? JSON.parse(val as string) : val;
      const selectOption = find(finalOptions, { value: val }) as DefaultOptionType;
      onSelect?.(nextVal, { label: selectOption.label, value: nextVal });
    };

    return (
      <Select
        ref={selectRef}
        value={isReferenceTypeVal ? JSON.stringify(value) : value}
        options={finalOptions}
        onChange={handleChange}
        onSelect={handleSelect}
        {...omit(props, ['value', 'onChange', 'options', 'onSelect'])}
      />
    );
  },
);

export default ComplexValSelect;
