import React from 'react';
import type { TooltipProps } from 'antd/lib/tooltip';
import type { ButtonModalProps } from '../button-modal';
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
    onClick?: () => void;
}
declare const MultiLineEllipsisText: React.FC<MultiLineEllipsisTextProps>;
export default MultiLineEllipsisText;
