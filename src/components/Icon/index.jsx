import * as React from 'react';
import classNames from 'classnames';
import { svgBaseProps, useInsertStyles } from './utils';


const Icon = React.forwardRef((props, ref) => {
  const {
    className,
    component: Component,
    viewBox,
    spin,
    rotate,
    tabIndex,
    onClick,
    children,
    ...restProps
  } = props;

  useInsertStyles();
  const classString = classNames(
    'spotecicon',
    className
  );

  const svgClassString = classNames({
    'spotecicon-spin': !!spin
  });

  const svgStyle = rotate
    ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`
    }
    : undefined;

  const innerSvgProps = {
    ...svgBaseProps,
    className: svgClassString,
    style: svgStyle,
    viewBox
  };

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  const renderInnerNode = () => {
    if (Component) {
      return <Component {...innerSvgProps}>{children}</Component>;
    }

    if (children) {
      return (
        <svg {...innerSvgProps} viewBox={viewBox}>
          {children}
        </svg>
      );
    }

    return null;
  };

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return (
    <span
      role="img"
      {...restProps}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      {renderInnerNode()}
    </span>
  );
});

Icon.displayName = 'AntdIcon';

export default Icon;
