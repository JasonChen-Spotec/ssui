import React from 'react';
import { string, oneOf, bool } from 'prop-types';
import classNames from 'classnames';
import '../../logo.svg'


const IconPropTypes = {
  symbolPrefix: string,
  name: string.isRequired,
  size: oneOf(['sm', 'md', 'lg']),
  type: oneOf(['normal', 'link', 'error', 'warning', 'info', 'success']),
  focusable: bool
};

const IconDefaultProps = {
  symbolPrefix: 'spotec-icon',
  size: 'md',
  type: 'normal',
  focusable: false
};


const Icon = props => {
  const { className, name, size, type, symbolPrefix, ...rest } = props;
  const cls = classNames(
    'icon-svg',
    `icon-svg-${name}`,
    `icon-svg-size-${size}`,
    `icon-svg-type-${type}`,
    className
  );

  return (
    <svg
      className={cls}
      {...rest}
    >
      <use xlinkHref={`#${[symbolPrefix, name].join('-')}`} />
    </svg>
  );
};

Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

export default Icon;
