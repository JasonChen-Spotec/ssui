import * as React from 'react';
export interface StepNumberInputProps {
    /** 输入框的内容 */
    value?: string | number;
    /** 输入数据的类型 */
    numberType?: 'int' | 'float';
    /** 精度，只对float有效 */
    precision?: number;
    /** 内容最大长度 */
    maxLength?: number;
    /** 指定输入框展示值的格式 */
    formatter?: (value: string) => string;
    /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
    parser?: (value: string) => string;
    /** 是否允许输入负数 */
    enableMinus?: boolean;
    /** 步进, 每次点击+/- 多少 */
    step?: string | number;
    /** 变化回调 */
    onChange?: (value: string) => void;
    /** 失去焦点回调 */
    onBlur?: (value: string) => void;
    /** 最大值 */
    max?: number;
    /** 最小值 */
    min?: number;
    /** 前缀 */
    prefix?: React.ReactNode;
    /** 后缀 */
    suffix?: React.ReactNode;
    /** 可以点击清除图标删除内容 */
    allowClear?: boolean;
    disabled?: boolean;
}
declare const StepNumberInput: (props: StepNumberInputProps) => import("react/jsx-runtime").JSX.Element;
export default StepNumberInput;
