import React from 'react';
interface ViewProps {
    /** 子元素 */
    children: React.ReactNode;
    /** 样式 */
    className?: string;
    /** 拆分方式 */
    split: 'vertical' | 'horizontal';
    /** 大小 */
    size?: string | number;
}
declare const View: React.ForwardRefExoticComponent<ViewProps & React.RefAttributes<HTMLDivElement>>;
export default View;
