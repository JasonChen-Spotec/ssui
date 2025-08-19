import React from 'react';
import type { ConditionInputProps } from '../condition-input';
export interface LabelConditionInputProps
  extends Omit<ConditionInputProps, 'onBlur' | 'onChange'> {
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框失去焦点的回调 */
  onBlur?: (value: string) => void;
  /** 输入框除去label之后的最小末尾宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}
declare const LabelConditionInput: (props: LabelConditionInputProps) => JSX.Element;
export default LabelConditionInput;
