import React from 'react';
import classNames from 'classnames';
import type { NumericFormatProps, PatternFormatProps } from 'react-number-format';
import { NumericFormat, PatternFormat } from 'react-number-format';

export type NumberFormatInputProps = Partial<NumericFormatProps> &
  Partial<PatternFormatProps>;

// 根据是否传入 pattern 字符串格式，选择对应的 react-number-format 封装：
// - 传 format="#### #### #### ####" 这类 pattern 时使用 PatternFormat（支持 mask）
// - 否则使用 NumericFormat（支持 thousandSeparator / prefix / suffix 等数字格式化）
const NumberFormatInput: React.FC<NumberFormatInputProps> = ({
  className,
  format,
  ...restProps
}) => {
  if (typeof format === 'string') {
    return (
      <PatternFormat
        {...restProps}
        format={format}
        className={classNames('rc-number-format-input', className)}
      />
    );
  }
  return (
    <NumericFormat
      {...restProps}
      className={classNames('rc-number-format-input', className)}
    />
  );
};

export default NumberFormatInput;
