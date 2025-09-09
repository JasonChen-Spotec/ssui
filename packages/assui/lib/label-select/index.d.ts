import React from 'react';
import type { SelectProps } from 'antd/lib/select';
import type { ComplexValSelectProps } from '../complex-val-select';
declare const Option: import("rc-select/lib/Option").OptionFC;
export { Option };
export interface LabelSelectProps extends ComplexValSelectProps<any> {
    label?: React.ReactNode;
    onBlur?: (value: SelectProps['value']) => void;
}
declare const ForwardRefLabelSelect: React.ForwardRefExoticComponent<LabelSelectProps & React.RefAttributes<unknown>>;
export default ForwardRefLabelSelect;
