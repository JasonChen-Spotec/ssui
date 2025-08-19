import React from 'react';
export interface LabelTextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'type' | 'onChange' | 'onFocus' | 'onBlur' | 'style'
  > {
  /** 自定义class */
  className?: string;
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框内容 */
  value?: string;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框失去焦点的回调 */
  onBlur?: (value: string) => void;
  /** 输入框获取焦点的回调 */
  onFocus?: (value: string) => void;
  /** 组件dom id */
  id?: string;
}
declare const LabelTextArea: React.FC<LabelTextAreaProps>;
export default LabelTextArea;
