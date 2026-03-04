import React from 'react';
import type { NumberInputProps } from '../number-input';
export interface LabelNumberInputProps extends NumberInputProps {
    /** label 标签的文本 */
    label?: React.ReactNode;
    /** label 是否省略 */
    labelEllipsis?: false;
    /** 输入框除去label之后的最小末尾宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
/** 当label需要省略时，label为string且必填 */
export interface LabelNumberInputEllipsisProps extends NumberInputProps {
    /** label 标签的文本 */
    label: string;
    /** label 是否省略 */
    labelEllipsis: true;
    /** 输入框除去label之后的最小末尾宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
declare const LabelNumberInput: (props: LabelNumberInputProps | LabelNumberInputEllipsisProps) => JSX.Element;
export default LabelNumberInput;
