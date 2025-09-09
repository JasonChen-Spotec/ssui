import React from 'react';
export interface LabelInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type' | 'onChange' | 'onFocus' | 'onBlur'> {
    /** 自定义class */
    className?: string;
    /** label 标签的文本 */
    label?: React.ReactNode;
    /** 输入框内容 */
    value?: string;
    /** 带有后缀的 input */
    suffix?: React.ReactNode;
    /** 带有前缀的 input */
    prefix?: React.ReactNode;
    /** 输入框内容变化时的回调 */
    onChange?: (value: string) => void;
    /** 输入框失去焦点的回调 */
    onBlur?: (value: string) => void;
    /** 规定 input 元素的类型 */
    type?: 'text' | 'password';
    /** 规定输入字段中的字符的最大长度 */
    maxLength?: number;
    /** 输入框获取焦点的回调 */
    onFocus?: (value: string) => void;
    /** 输入框除去label之后的最小末尾宽度 */
    baseMinWidth?: number;
    /** 组件dom id */
    id?: string;
}
declare const LabelInput: React.FC<LabelInputProps>;
export default LabelInput;
