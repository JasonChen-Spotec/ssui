import * as React from 'react';
import omit from 'lodash/omit';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';
import type { DefaultOptionType, RefSelectProps, SelectProps } from 'antd/lib/select';
import Select from 'antd/lib/select';
import classNames from 'classnames';
import ArrowDownOutlined from 'a-icons/lib/ArrowDownOutlined';
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
        value: isUndefined(item.value) ? undefined : JSON.stringify(item.value),
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
  onChange?: (
    val: T,
    opt?: ComplexValSelectOptionType | ComplexValSelectOptionType[],
  ) => void;
  options?: ComplexValSelectOptionType[];
}

const ComplexValSelect = React.forwardRef<
  unknown,
  ComplexValSelectProps<ComplexValSelectValueType>
>((props, ref) => {
  const [value, setValue] = useControllableValue(props);
  const { options, onSelect } = props;
  const selectRef = React.useRef<RefSelectProps>(null);

  React.useImperativeHandle(ref, () => selectRef.current);

  // 判断是否需要将optionValue转为JSON字符串
  const isReferenceTypeVal = isReferenceTypeOption(options);

  const finalOptions = (
    isReferenceTypeVal ? formatOptions(options) : options
  ) as SelectProps['options'];

  const handleChange: SelectProps['onChange'] = (val, option) => {
    let nextVal = val;
    if (val && isReferenceTypeVal) {
      nextVal = isArray(val)
        ? val.map((item) => JSON.parse(item as string))
        : JSON.parse(val as string);
    }
    setValue(nextVal, option as ComplexValSelectOptionType | ComplexValSelectOptionType[]);
  };

  const handleSelect = (val: any, option: DefaultOptionType) => {
    const nextVal = val && isReferenceTypeVal ? JSON.parse(val as string) : val;
    onSelect?.(nextVal, option);
  };

  const displayValue = React.useMemo(() => {
    if (value && isReferenceTypeVal) {
      return isArray(value)
        ? value.map((v) => JSON.stringify(v))
        : JSON.stringify(value);
    }
    return value;
  }, [value, isReferenceTypeVal]);

  return (
    <Select
      ref={selectRef}
      className={classNames('complex-val-select', props?.className)}
      suffixIcon={<ArrowDownOutlined />}
      value={displayValue}
      options={finalOptions}
      onChange={handleChange}
      onSelect={handleSelect}
      {...omit(props, ['value', 'defaultValue', 'onChange', 'options', 'onSelect', 'className'])}
    />
  );
});

export default ComplexValSelect;
