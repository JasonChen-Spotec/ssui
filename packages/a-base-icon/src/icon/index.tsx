import * as React from 'react';
import classNames from 'classnames';
import { svgBaseProps, useInsertStyles } from './utils';

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconComponentProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: React.CSSProperties;
  viewBox?: string;
  className?: string;
}

export interface IconProps extends IconBaseProps {
  className?: string;
  component?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
  viewBox?: string;
  tabIndex?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const Icon = (props: IconProps) => {
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
  const classString = classNames('spotecicon', className);

  const svgClassString = classNames({
    'spotecicon-spin': !!spin,
  });

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;

  const innerSvgProps: CustomIconComponentProps = {
    ...svgBaseProps,
    className: svgClassString,
    style: svgStyle,
    viewBox,
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
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      {renderInnerNode()}
    </span>
  );
};

Icon.displayName = 'SpotecIcon';

export default Icon;
