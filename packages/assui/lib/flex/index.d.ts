import React from 'react';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
export interface FlexProps<P = Record<PropertyKey, any>> extends React.HTMLAttributes<HTMLElement> {
    /** flex 主轴的方向是否垂直 */
    vertical?: boolean;
    /** 设置元素单行显示还是多行显示 */
    wrap?: React.CSSProperties['flexWrap'];
    /** 设置元素在主轴方向上的对齐方式 */
    justify?: React.CSSProperties['justifyContent'];
    /** 设置元素在交叉轴方向上的对齐方式 */
    align?: React.CSSProperties['alignItems'];
    /** flex CSS 简写属性 */
    flex?: React.CSSProperties['flex'];
    /** 设置网格之间的间隙 */
    gap?: React.CSSProperties['gap'] | SizeType;
    children: React.ReactNode;
    /** 自定义元素类型 */
    component?: React.ComponentType<P> | string;
}
declare const Flex: React.ForwardRefExoticComponent<FlexProps<Record<PropertyKey, any>> & React.RefAttributes<HTMLElement>>;
export default Flex;
