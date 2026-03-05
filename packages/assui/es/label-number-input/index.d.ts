import React from 'react';
import type { NumberInputProps } from '../number-input';
interface LabelNumberInputBaseProps extends NumberInputProps {
    /** label 标签的文本 */
    label?: React.ReactNode;
    /** label 是否省略 */
    labelEllipsis?: false;
    /** 输入框最小宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
/** 当label需要省略时，label为string */
interface LabelNumberInputEllipsisProps extends NumberInputProps {
    /** label 标签的文本 */
    label?: string;
    /** label 是否省略 */
    labelEllipsis: true;
    /** 输入框最小宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
export type LabelNumberInputProps = LabelNumberInputBaseProps | LabelNumberInputEllipsisProps;
declare const LabelNumberInput: (props: LabelNumberInputProps) => JSX.Element;
export default LabelNumberInput;
