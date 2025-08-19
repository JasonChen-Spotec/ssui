import type { TooltipProps } from 'antd/lib/tooltip';
import React from 'react';
export interface CopyToClipboardProps {
  /** 需要复制的字符串 */
  text: string;
  /** 触发复制事件的元素 */
  children: React.ReactElement;
  /** 文本被复制时候的回调 */
  onCopy?: (text: string, result: boolean) => void;
  /** ant design Tooltip props */
  tooltipProps?: Omit<TooltipProps, 'title'>;
  /** 复制成功的Tooltip提示文案 */
  tooltipTitle?: React.ReactNode;
  /** 依赖底层组件 https://github.com/sudodoki/copy-to-clipboard 的 options */
  options?: {
    debug?: boolean;
    message?: string;
    format?: string;
  };
}
declare const _default: React.MemoExoticComponent<
  (props: CopyToClipboardProps) => JSX.Element
>;
export default _default;
