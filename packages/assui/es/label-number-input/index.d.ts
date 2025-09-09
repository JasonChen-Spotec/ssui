import React from 'react';
import type { NumberInputProps } from '../number-input';
export interface LabelNumberInputProps extends NumberInputProps {
    /** label 标签的文本 */
    label?: React.ReactNode;
    /** 输入框除去label之后的最小末尾宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
declare const LabelNumberInput: (props: LabelNumberInputProps) => JSX.Element;
export default LabelNumberInput;
