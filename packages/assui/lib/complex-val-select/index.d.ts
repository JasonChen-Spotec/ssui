import type { DefaultOptionType, SelectProps } from 'antd/lib/select';
import * as React from 'react';
declare const Option: import('rc-select/lib/Option').OptionFC;
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
/** 判断optionsValue是否是引用类型 */
export declare const isReferenceTypeOption: (
  options?: ComplexValSelectOptionType[],
) => boolean;
export interface ComplexValSelectProps<T>
  extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value?: T;
  onChange?: (val: T, opt?: ComplexValSelectOptionType[]) => void;
  options?: ComplexValSelectOptionType[];
}
declare const ComplexValSelect: React.ForwardRefExoticComponent<
  ComplexValSelectProps<ComplexValSelectValueType> & React.RefAttributes<unknown>
>;
export default ComplexValSelect;
