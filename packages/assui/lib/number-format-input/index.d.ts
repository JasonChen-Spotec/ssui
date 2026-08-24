import React from 'react';
import type { NumericFormatProps, PatternFormatProps } from 'react-number-format';
export type NumberFormatInputProps = Partial<NumericFormatProps> & Partial<PatternFormatProps>;
declare const NumberFormatInput: React.FC<NumberFormatInputProps>;
export default NumberFormatInput;
