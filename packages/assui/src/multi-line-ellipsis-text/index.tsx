import React from 'react';
import type { TooltipProps } from 'antd/lib/tooltip';
import Tooltip from 'antd/lib/tooltip';
import classNames from 'classnames';
import omit from 'lodash/omit';
import useSize from 'ahooks/lib/useSize';
import type { ButtonModalProps } from '../button-modal';
import ButtonModal from '../button-modal';


export interface MultiLineEllipsisTextProps {
  /** 需要处理的文案 */
  text?: string;
  /** 展示的行数 */
  lines?: number;
  /** 文案样式 */
  className?: string;
  /** 展示完整内容的交互类型，不传则不提示 */
  tipType?: 'modal' | 'tooltip';
  /** 弹窗的属性，仅tipType=modal时生效 */
  buttonModalProps?: Omit<ButtonModalProps, 'children'> & {
    children?: ButtonModalProps['children'];
  };
  /** 浮窗的属性，仅tipType=tooltip时生效 */
  tooltipProps?: Omit<TooltipProps, 'title'>;
  /** 省略的回调 */
  onEllipsisChange?: (isEllipsis: boolean) => void;
  /** 点击的回调 */
  onClick?: (e: React.MouseEvent) => void;
}

const MultiLineEllipsisText: React.FC<MultiLineEllipsisTextProps> = ({
  text = '',
  lines = 3,
  className = '',
  tipType,
  buttonModalProps,
  tooltipProps,
  onEllipsisChange,
  onClick,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  // 监听容器宽度变化，重新计算是否需要省略
  const containerSize = useSize(ref);
  const [isEllipsis, setIsEllipsis] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    // 等待浏览器渲染完再计算高度
    requestAnimationFrame(() => {
      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight);
      const maxHeight = lineHeight * lines;

      const overflow = el.scrollHeight > maxHeight + 1; // +1 容差
      setIsEllipsis(overflow);
      onEllipsisChange?.(overflow);
    });
  }, [text, lines, onEllipsisChange, containerSize?.width]);

  const ellipsisNode = (
    <div
      ref={ref}
      className={classNames('ellipsis', className, {
        cursor: isEllipsis && tipType,
      })}
      style={{
        WebkitLineClamp: lines,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
      onClick={ onClick }
    >
      {text}
    </div>
  );

  if (isEllipsis && tipType === 'modal') {
    return (
      <ButtonModal
        destroyOnClose
        width={325}
        footer={null}
        {...omit(buttonModalProps, 'children')}
        className={classNames('ellipsis-modal', buttonModalProps?.className)}
        trigger={ellipsisNode}
      >
        {buttonModalProps?.children || (
          <div className="ellipsis-modal-content">{text}</div>
        )}
      </ButtonModal>
    );
  }

  if (isEllipsis && tipType === 'tooltip') {
    return (
      <Tooltip
        {...tooltipProps}
        overlayClassName={classNames('ellipsis-tooltip', tooltipProps?.overlayClassName)}
        title={<div className="ellipsis-tooltip-content">{text}</div>}
      >
        {ellipsisNode}
      </Tooltip>
    );
  }

  return ellipsisNode;
};

export default MultiLineEllipsisText;
