import type { InputProps } from 'antd/lib/input';
import * as React from 'react';
export interface ConditionInputProps extends Omit<InputProps, 'onChange'> {
  /** 过滤的正则条件 */
  regexp?:
    | RegExp
    | (
        | RegExp
        | string
        | {
            pattern: RegExp;
            replacement?: string;
          }
      )[];
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 输入框内容 */
  value?: string;
}
declare const ConditionInput: React.ForwardRefExoticComponent<
  ConditionInputProps & React.RefAttributes<unknown>
>;
export default ConditionInput;
