import * as React from 'react';
import omit from 'lodash/omit';
import find from 'lodash/find';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import type {
  BaseOptionType,
  DefaultOptionType,
  RefSelectProps,
  SelectProps,
} from 'antd/lib/select';
import Select from 'antd/lib/select';
import useControllableValue from 'ahooks/lib/useControllableValue';

const { Option } = Select;

export { Option };

export type ComplexValSelectValueType =
  | string
  | number
  | any[]
  | Record<string, any>
  | null
  | undefined;

export interface ComplexValSelectOptionType extends BaseOptionType {
  label: React.ReactNode;
  value?: ComplexValSelectValueType;
  children?: Omit<ComplexValSelectOptionType, 'children'>[];
}

export interface ComplexValSelectProps<T>
  extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value?: T;
  onChange?: (val: T, opt?: ComplexValSelectOptionType[]) => void;
  options?: ComplexValSelectOptionType[];
}

const ComplexValSelect = React.forwardRef<
  unknown,
  ComplexValSelectProps<ComplexValSelectValueType>
>((props, ref) => {
  const [value, setValue] = useControllableValue(props);
  const { options, onChange, onSelect } = props;
  const selectRef = React.useRef<RefSelectProps>(null);

  React.useImperativeHandle(ref, () => selectRef.current);

  // 判断是否需要将optionValue转为JSON字符串
  const isReferenceTypeVal = some(
    options,
    (item) => isArray(item.value) || isObject(item.value),
  );

  const finalOptions = (
    isReferenceTypeVal
      ? options?.map((item) => ({
          ...item,
          value: JSON.stringify(item.value),
        }))
      : options
  ) as SelectProps['options'];

  const handleChange: SelectProps['onChange'] = (val) => {
    const nextVal = val && isReferenceTypeVal ? JSON.parse(val as string) : val;
    setValue(nextVal);
    onChange?.(nextVal, options);
  };

  const handleSelect = (val: ComplexValSelectValueType) => {
    const nextVal = val && isReferenceTypeVal ? JSON.parse(val as string) : val;
    const selectOption = find(finalOptions, { value: val }) as DefaultOptionType;
    onSelect?.(nextVal, selectOption);
  };

  return (
    <Select
      ref={selectRef}
      value={value && isReferenceTypeVal ? JSON.stringify(value) : value}
      options={finalOptions}
      onChange={handleChange}
      onSelect={handleSelect}
      {...omit(props, ['value', 'onChange', 'options', 'onSelect'])}
    />
  );
});

export default ComplexValSelect;
