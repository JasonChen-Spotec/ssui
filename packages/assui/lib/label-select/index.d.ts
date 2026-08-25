import React from 'react';
import type { OptionProps, SelectProps } from 'antd/lib/select';
import type { ComplexValSelectProps } from '../complex-val-select';
export declare const Option: React.FC<OptionProps>;
export interface LabelSelectProps extends ComplexValSelectProps<any> {
    label?: React.ReactNode;
    onBlur?: (value: SelectProps['value']) => void;
}
declare const ForwardRefLabelSelect: React.ForwardRefExoticComponent<LabelSelectProps & React.RefAttributes<unknown>>;
export default ForwardRefLabelSelect;
