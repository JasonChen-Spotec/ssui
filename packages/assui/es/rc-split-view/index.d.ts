import React from 'react';
import View from './View';
export { View };
export interface RcSplitViewProps {
    /** 是否允许拖动 */
    draggable?: boolean;
    /** children */
    children: React.ReactNode;
    /** 自定义组件类名 */
    className?: string;
    /** 拖拽条单击回调 */
    onResizerClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    /** 拖拽条双击回调 */
    onResizerDoubleClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    /** 面板样式 */
    viewClassName?: string;
    /** 第一个面板样式 */
    firstViewClassName?: string;
    /** 第二个面板样式 */
    secondViewClassName?: string;
    /** 分隔条样式 */
    handleClassName?: string;
    /** 分隔条内容样式 */
    handleContentClassName?: string;
    /** 拆分方式 */
    split?: 'vertical' | 'horizontal';
    /** 拖拽过程回调 */
    onChange?: (newSize: number) => void;
    /** 拖拽开始回调 */
    onDragStarted?: () => void;
    /** 拖拽完成回调 */
    onDragFinished?: (newSize: number) => void;
    /** 主体窗口 */
    primary?: 'first' | 'second';
    /** 拖动固定步进值 */
    step?: number;
    /** 最大窗口大小 */
    maxSize?: number;
    /** 最小窗口大小 */
    minSize?: number;
    /** 窗口大小 */
    size?: string | number;
    /** 默认窗口大小 */
    defaultSize?: string | number;
    /** 分隔条内容 */
    handleContent?: React.ReactNode;
}
export type StatesTypes = {
    /** 激活 */
    active: boolean;
    /** 位置 */
    position: number;
    /** 拖拽尺寸 */
    draggedSize?: number;
    /** 实例参数 */
    instanceProps: {
        size?: string | number;
    };
    /** 第一面板的尺寸 */
    firstViewSize?: number | string;
    /** 第二面板的尺寸 */
    secondViewSize?: number | string;
};
declare const RcSplitView: React.FC<RcSplitViewProps>;
export default RcSplitView;
