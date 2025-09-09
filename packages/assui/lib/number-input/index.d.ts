import * as React from 'react';
import type { InputProps } from 'antd/lib/input';
import * as dataTypeEnum from './const/dataTypeEnum';
import * as numberTypeEnum from './const/numberType';
export type NumberInputValueType = string | number;
export interface NumberInputProps extends Omit<InputProps, 'onChange' | 'onBlur'> {
    /** 输入框的内容 */
    value?: NumberInputValueType;
    /** 输入数据的类型 */
    numberType?: 'int' | 'float';
    /** value的数据类型 */
    dataType?: 'number' | 'string';
    /** 精度，只对float有效 */
    precision?: number;
    /** 同html input属性功能 */
    maxLength?: number;
    /** 指定输入框展示值的格式 */
    formatter?: (value: string) => string;
    /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
    parser?: (value: string) => string;
    /** 是否允许输入负数 */
    enableMinus?: boolean;
    /** 变化回调 */
    onChange?: (value: NumberInputValueType) => void;
    /** 失去焦点回调 */
    onBlur?: (value: NumberInputValueType) => void;
    /** 按下回车的回调 */
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    /** 带标签的 input，设置前置标签 */
    addonBefore?: React.ReactNode;
    /** 带标签的 input，设置后置标签 */
    addonAfter?: React.ReactNode;
    /** 前缀 */
    prefix?: React.ReactNode;
    /** 后缀 */
    suffix?: React.ReactNode;
    /** 可以点击清除图标删除内容 */
    allowClear?: boolean;
}
declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<unknown>>;
export { numberTypeEnum, dataTypeEnum };
export default NumberInput;
