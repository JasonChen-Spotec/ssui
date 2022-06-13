import React from 'react';
import ReactNumberFormat from 'react-number-format';
import classNames from 'classnames';
import type { NumberFormatProps as ReactNumberFormatProps } from 'react-number-format';

export type NumberFormatInputProps = ReactNumberFormatProps;

const NumberFormatInput: React.FC<NumberFormatInputProps> = ({ className, ...restProps }) => (
  <ReactNumberFormat {...restProps} className={classNames('rc-number-format-input', className)} />
);

export default NumberFormatInput;
