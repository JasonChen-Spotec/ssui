import React from 'react';
import { NumberFormatBase } from 'react-number-format';
import classNames from 'classnames';
import type { NumberFormatBaseProps as ReactNumberFormatProps } from 'react-number-format';

export type NumberFormatInputProps = ReactNumberFormatProps;

// TODO  react-number-format 分别封装导出
const NumberFormatInput: React.FC<NumberFormatInputProps> = ({
  className,
  ...restProps
}) => (
  <NumberFormatBase
    {...restProps}
    className={classNames('rc-number-format-input', className)}
  />
);

export default NumberFormatInput;
