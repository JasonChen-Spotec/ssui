import * as React from 'react';
import omit from 'lodash/omit';
import find from 'lodash/find';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import type { DefaultOptionType, RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';

const { Option } = Select;

export { Option };

export type ComplexValSelectValueType =
  | string
  | number
  | any[]
  | Record<string, any>
  | null
  | undefined;

export interface ComplexValSelectOptionType
  extends Omit<DefaultOptionType, 'value' | 'children' | 'options'> {
  value?: ComplexValSelectValueType;
  children?: ComplexValSelectOptionType[];
  options?: Omit<ComplexValSelectOptionType, 'children' | 'options'>[];
}

const formatOptions = (
  dateSource?: ComplexValSelectOptionType[],
): DefaultOptionType[] | undefined => {
  if (dateSource) {
    const options = dateSource.map((item) => {
      const otherProps = item.options ? { options: formatOptions(item.options) } : {};
      return {
        ...item,
        label: item.label,
        value: item.value ? JSON.stringify(item.value) : undefined,
        ...otherProps,
      };
    });

    return options;
  }

  return dateSource;
};

/** 判断optionsValue是否是引用类型 */
export const isReferenceTypeOption = (options?: ComplexValSelectOptionType[]) => {
  const resultBoolean = some(options, (item) => {
    if (item.value) {
      return isArray(item.value) || isObject(item.value);
    }
    if (item.options) {
      return some(item.options, (i) => isArray(i.value) || isObject(i.value));
    }
    return false;
  });

  return resultBoolean;
};

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
  const { value, options, onChange, onSelect } = props;
  const selectRef = React.useRef<RefSelectProps>(null);

  React.useImperativeHandle(ref, () => selectRef.current);

  // 判断是否需要将optionValue转为JSON字符串
  const isReferenceTypeVal = isReferenceTypeOption(options);

  const finalOptions = (
    isReferenceTypeVal ? formatOptions(options) : options
  ) as SelectProps['options'];

  const handleChange: SelectProps['onChange'] = (val) => {
    const nextVal = val && isReferenceTypeVal ? JSON.parse(val as string) : val;
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
