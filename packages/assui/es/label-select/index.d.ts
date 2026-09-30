import React from 'react';
import type { SelectProps } from 'antd';
import type { ComplexValSelectProps } from '../complex-val-select';
export declare const Option: import("@rc-component/select/es/Option").OptionFC;
export interface LabelSelectProps extends ComplexValSelectProps<any> {
    label?: React.ReactNode;
    onBlur?: (value: SelectProps['value']) => void;
}
declare const ForwardRefLabelSelect: React.ForwardRefExoticComponent<LabelSelectProps & React.RefAttributes<unknown>>;
export default ForwardRefLabelSelect;
