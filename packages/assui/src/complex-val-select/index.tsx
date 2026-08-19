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
import stableStringify from 'aa-utils/lib/stableStringify';
import { isNil } from 'lodash';

const { Option } = Select;
export { Option };

// 核心防御：防止非标准 JSON 字符串（如 tags 模式下手敲的纯文本或 undefined）导致页面崩溃
const safeParse = (str: string) => {
  if (typeof str !== 'string') return str;
  try {
    return JSON.parse(str);
  } catch {
    return str; // 解析失败直接返回原字符串
  }
};

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

/** 递归格式化 options，将复杂 value 序列化为字符串 */
const formatOptions = (
  dataSource?: ComplexValSelectOptionType[],
): DefaultOptionType[] | undefined => {
  if (!dataSource) return dataSource;

  return dataSource.map((item) => {
    const otherProps = item.options ? { options: formatOptions(item.options) } : {};

    return {
      ...item,
      label: item.label,
      value: isUndefined(item.value) ? undefined : stableStringify(item.value),
      ...otherProps,
    };
  });
};

/** 判断 options 的 value 中是否包含引用类型（对象或数组） */
export const isReferenceTypeOption = (options?: ComplexValSelectOptionType[]) =>
  some(options, (item) => {
    if (!isUndefined(item.value)) {
      return isArray(item.value) || isObject(item.value);
    }
    if (item.options) {
      return some(item.options, (i) => isArray(i.value) || isObject(i.value));
    }
    return false;
  });

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
  const { options, onSelect, mode } = props;
  const selectRef = React.useRef<RefSelectProps>(null);

  React.useImperativeHandle(ref, () => selectRef.current);

  // 判断是否为多选模式 (multiple 或 tags)
  const isMultiple = mode === 'multiple' || mode === 'tags';

  // 判断是否需要将 option 的 value 转为 JSON 字符串
  const isReferenceTypeVal = isReferenceTypeOption(options);

  const finalOptions = (
    isReferenceTypeVal ? formatOptions(options) : options
  ) as SelectProps['options'];

  // 处理选中值改变：将底层传出的字符串安全地 parse 回真实的数据结构
  const handleChange: SelectProps['onChange'] = (val, option) => {
    let nextVal = val;

    if (!isNil(val) && isReferenceTypeVal) {
      nextVal = isMultiple && isArray(val)
        ? val.map((item) => safeParse(item as string))
        : safeParse(val as string);
    }
    setValue(nextVal, option as ComplexValSelectOptionType | ComplexValSelectOptionType[]);
  };

  const handleSelect = (val: any, option: DefaultOptionType) => {
    const nextVal = !isNil(val) && isReferenceTypeVal ? safeParse(val as string) : val;
    onSelect?.(nextVal, option);
  };

  // 处理回显展示值：将传入的真实数据结构 stringify 成字符串去匹配底层 Option
  const displayValue = React.useMemo(() => {
    if (!isNil(value) && isReferenceTypeVal) {
      return isMultiple && isArray(value)
        ? value.map((v) => {
            // 在 tags 模式下，如果 v 已经是手敲的基础字符串，直接放行，避免产生多余的双引号
            if (mode === 'tags' && typeof v === 'string') return v;
            return stableStringify(v);
          })
        : stableStringify(value);
    }
    return value;
  }, [value, isReferenceTypeVal, isMultiple, mode]);

  return (
    <Select
      ref={selectRef}
      className={classNames('complex-val-select', props?.className)}
      suffixIcon={<ArrowDownOutlined />}
      value={displayValue}
      options={finalOptions}
      onChange={handleChange}
      onSelect={handleSelect}
      {...omit(props, [
        'value',
        'defaultValue',
        'onChange',
        'options',
        'onSelect',
        'className',
      ])}
    />
  );
});

export default ComplexValSelect;
