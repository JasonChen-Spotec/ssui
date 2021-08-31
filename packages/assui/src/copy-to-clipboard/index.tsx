import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import Tooltip, { TooltipProps } from 'antd/lib/tooltip';

export interface CopyToClipboardProps {
  /** 需要复制的字符串 */
  text: string;
  /** 触发复制事件的元素 */
  children: React.ReactElement;
  /** 文本被复制时候的回调 */
  onCopy?(text: string, result: boolean): void;
  /** ant design Tooltip props */
  tooltipProps: TooltipProps;
  /** 复制成功的Tooltip提示文案 */
  tooltipTitle?: React.ReactNode;
  /** 依赖底层组件 https://github.com/sudodoki/copy-to-clipboard 的 options */
  options?: {
    debug?: boolean;
    message?: string;
    format?: string; // MIME type
  };
}

const CopyToClipboard = (props: CopyToClipboardProps) => {
  const { text, onCopy, children, options, tooltipTitle, tooltipProps } = props;
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopySuccess = () => {
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };

  const onClick = (event: React.SyntheticEvent) => {
    const elem = React.Children.only(children);
    const result = copy(text, options);

    if (onCopy) {
      onCopy(text, result);
    }

    if (tooltipTitle) {
      handleCopySuccess();
    }

    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };

  return tooltipTitle ? (
    <Tooltip placement="topLeft" visible={tooltipVisible} title={tooltipTitle} {...tooltipProps}>
      {React.cloneElement(children, { onClick })}
    </Tooltip>
  ) : (
    React.cloneElement(children, { onClick })
  );
};

export default React.memo(CopyToClipboard);
