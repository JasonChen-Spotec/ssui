import React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import { isPresetSize } from './utils/gapSize';
import createFlexClassNames from './utils';

export interface FlexProps<P = Record<PropertyKey, any>>
  extends React.HTMLAttributes<HTMLElement> {
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

const Flex = React.forwardRef<HTMLElement, FlexProps>((props, ref) => {
  const {
    className,
    style,
    flex,
    gap,
    children,
    vertical = false,
    component: Component = 'div',
    ...othersProps
  } = props;

  const prefixCls = 'as-flex';

  const flexClassNames = createFlexClassNames(prefixCls, props);

  const mergedCls = classNames(className, prefixCls, flexClassNames, {
    [`${prefixCls}-gap-${gap}`]: isPresetSize(gap),
    [`${prefixCls}-vertical`]: vertical,
  });

  const mergedStyle: React.CSSProperties = { ...style };

  if (flex) {
    mergedStyle.flex = flex;
  }

  if (gap && !isPresetSize(gap)) {
    mergedStyle.gap = gap;
  }

  return (
    <Component
      ref={ref}
      className={mergedCls}
      {...omit(othersProps, ['justify', 'wrap', 'align'])}
      style={mergedStyle}
    >
      {children}
    </Component>
  );
});

export default Flex;
