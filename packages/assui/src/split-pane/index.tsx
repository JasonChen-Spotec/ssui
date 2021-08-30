import * as React from 'react';
import SplitPane from 'react-split-pane';

export type Size = string | number;

export type Split = 'vertical' | 'horizontal';

export type SplitPaneProps = {
  /**
   * 是否允许拖动
   * @default true
   */
  allowResize?: boolean;
  /** 自定义组件类名 */
  className?: string;
  /**
   * 设置主体窗口
   * @default first
   */
  primary?: 'first' | 'second';
  /**
   * 窗口最小大小
   * @default 50
   */
  minSize?: string | number;
  /** 窗口最大大小 */
  maxSize?: string | number;
  /** 默认窗口大小 */
  defaultSize?: string | number;
  /** 窗口大小 */
  size?: string | number;
  /**
   * 拆分方式
   * @default vertical
   */
  split?: 'vertical' | 'horizontal';
  /** 拖拽开始回调 */
  onDragStarted?: () => void;
  /** 拖拽完成回调 */
  onDragFinished?: (newSize: number) => void;
  /** 拖拽过程回调 */
  onChange?: (newSize: number) => void;
  /** 拖拽条单击回调 */
  onResizerClick?: (event: MouseEvent) => void;
  /** 拖拽条双击回调 */
  onResizerDoubleClick?: (event: MouseEvent) => void;
  /** 总窗口样式 */
  style?: React.CSSProperties;
  /** 拖拽条样式 */
  resizerStyle?: React.CSSProperties;
  /** 每个窗口共同样式 */
  paneStyle?: React.CSSProperties;
  /** 拆分窗口1样式 */
  pane1Style?: React.CSSProperties;
  /** 拆分窗口2样式 */
  pane2Style?: React.CSSProperties;
  /** 拆分窗口2样式 */
  resizerClassName?: string;
  /** 拖动固定步进值 */
  step?: number;
};

export default (props: SplitPaneProps) => <SplitPane {...props} />;
