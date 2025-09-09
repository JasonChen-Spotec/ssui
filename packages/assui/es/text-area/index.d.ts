import * as React from 'react';
import type { TextAreaProps } from 'antd/lib/input';
export interface TAreaProps extends Omit<TextAreaProps, 'onChange'> {
    /** 输入框内容 */
    value?: any;
    /** 指定输入框展示值的格式 */
    formatter?: (value: string) => string;
    /** 变化回调 */
    onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const TextArea: ({ value, onChange, formatter, ...restProps }: TAreaProps) => JSX.Element;
export default TextArea;
