import React from 'react';
import type { LabelConditionInputProps } from '../label-condition-input';
import type { LabelSelectProps } from '../label-select';
export declare enum InputTypeEnum {
    CONDITION_INPUT = "conditionInput",
    SELECT = "select"
}
export declare enum EntryTypeEnum {
    FIRST_ENTRY = "firstEntry",
    SECOND_ENTRY = "secondEntry"
}
export type ChangedEntryType = (typeof EntryTypeEnum)[keyof typeof EntryTypeEnum];
type SelectOptionsType = {
    value: number;
    label: string;
};
export interface MainSelectOptionsType extends SelectOptionsType {
    children?: SelectOptionsType[];
}
export interface ValueType {
    selectValue?: number | string | null;
    inputValue?: LabelSelectProps['value'] | LabelConditionInputProps['value'];
    finalSelectValue?: LabelSelectProps['value'] | LabelConditionInputProps['value'][];
    changedEntryType?: ChangedEntryType;
}
export interface LabelConditionSelectInputProps {
    value?: ValueType;
    /** 不需要展示联动输入框的字段值 */
    hiddenInputKeys?: ValueType['selectValue'][];
    /** selectProps */
    selectProps?: LabelSelectProps;
    /** 联动inputProps */
    conditionInputProps?: LabelConditionInputProps;
    /** 联动selectProps */
    conditionSelectProps?: LabelSelectProps;
    /** onChange */
    onChange?: (value: ValueType) => void;
    /** onBlur */
    onBlur?: (value: ValueType) => void;
    /** 输入框类型 */
    inputType?: InputTypeEnum;
    /** select options */
    optionsList: MainSelectOptionsType[];
    /** label */
    label?: React.ReactNode;
    /** 样式 */
    className?: string;
}
declare const LabelConditionSelectInput: (props: LabelConditionSelectInputProps) => import("react/jsx-runtime").JSX.Element;
export default LabelConditionSelectInput;
