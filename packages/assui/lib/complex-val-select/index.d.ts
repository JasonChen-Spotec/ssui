import * as React from 'react';
import type { DefaultOptionType, OptionProps, SelectProps } from 'antd/lib/select';
export declare const Option: React.FC<OptionProps>;
export type ComplexValSelectValueType = string | number | any[] | Record<string, any> | null | undefined;
export interface ComplexValSelectOptionType extends Omit<DefaultOptionType, 'value' | 'children' | 'options'> {
    value?: ComplexValSelectValueType;
    children?: ComplexValSelectOptionType[];
    options?: Omit<ComplexValSelectOptionType, 'children' | 'options'>[];
}
/** 判断 options 的 value 中是否包含引用类型（对象或数组） */
export declare const isReferenceTypeOption: (options?: ComplexValSelectOptionType[]) => boolean;
export interface ComplexValSelectProps<T> extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
    value?: T;
    onChange?: (val: T, opt?: ComplexValSelectOptionType | ComplexValSelectOptionType[]) => void;
    options?: ComplexValSelectOptionType[];
}
declare const ComplexValSelect: React.ForwardRefExoticComponent<ComplexValSelectProps<ComplexValSelectValueType> & React.RefAttributes<unknown>>;
export default ComplexValSelect;
