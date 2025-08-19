import type { SelectProps } from 'antd/lib/select';
import { ComplexValSelectProps, ComplexValSelectValueType } from '../complex-val-select';
import type { ConditionInputProps } from '../condition-input';
export declare enum InputTypeEnum {
  CONDITION_INPUT = 'conditionInput',
  SELECT = 'select',
}
export declare enum EntryTypeEnum {
  FIRST_ENTRY = 'firstEntry',
  SECOND_ENTRY = 'secondEntry',
}
export type ChangedEntryType = typeof EntryTypeEnum[keyof typeof EntryTypeEnum];
type SelectOptionsType = {
  value: ComplexValSelectValueType;
  label: string;
};
export interface MainSelectOptionsType extends SelectOptionsType {
  children?: SelectOptionsType[];
}
export interface ValueType {
  selectValue?: ComplexValSelectValueType;
  inputValue?: SelectProps['value'] | ConditionInputProps['value'];
  finalSelectValue?: ComplexValSelectProps<any>['value'] | ConditionInputProps['value'][];
  changedEntryType?: ChangedEntryType;
}
export interface ConditionSelectInputProps {
  value?: ValueType;
  /** 不需要展示联动输入框的字段值 */
  hiddenInputKeys?: ValueType['selectValue'][];
  /** selectProps */
  selectProps?: ComplexValSelectProps<any>;
  /** 联动inputProps */
  conditionInputProps?: ConditionInputProps;
  /** 联动selectProps */
  conditionSelectProps?: ComplexValSelectProps<any>;
  /** onChange */
  onChange?: (value: ValueType) => void;
  /** onBlur */
  onBlur?: (value: ValueType) => void;
  /** 输入框类型 */
  inputType?: InputTypeEnum;
  /** select options */
  optionsList: MainSelectOptionsType[];
}
declare const ConditionSelectInput: (props: ConditionSelectInputProps) => JSX.Element;
export default ConditionSelectInput;
