import React from 'react';
import type { TooltipProps } from 'antd/lib/tooltip';
import type { ButtonModalProps } from '../button-modal';
export interface MultiLineEllipsisTextProps {
    text?: string;
    lines?: number;
    className?: string;
    /** 展示全部的交互类型，不传则不提示 */
    tipType?: 'modal' | 'tooltip';
    buttonModalProps?: Omit<ButtonModalProps, 'children'> & {
        children?: ButtonModalProps['children'];
    };
    tooltipProps?: Omit<TooltipProps, 'title'>;
    onEllipsisChange?: (isEllipsis: boolean) => void;
    onClick?: () => void;
}
declare const MultiLineEllipsisText: React.FC<MultiLineEllipsisTextProps>;
export default MultiLineEllipsisText;
