import React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import { isPresetSize } from './utils/gapSize';
import createFlexClassNames from './utils';

export interface FlexProps<P = Record<PropertyKey, any>>
  extends React.HTMLAttributes<HTMLElement> {
  vertical?: boolean;
  wrap?: React.CSSProperties['flexWrap'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  flex?: React.CSSProperties['flex'];
  gap?: React.CSSProperties['gap'] | SizeType;
  children: React.ReactNode;
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

  const prefixCls = 'ant-flex';

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
