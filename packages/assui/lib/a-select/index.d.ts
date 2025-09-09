import React from 'react';
import type { SelectProps } from 'antd/lib/select';
export interface ASelectProps extends SelectProps {
    className?: string;
    valueRender?: (value: any) => React.ReactNode;
}
declare const ASelect: {
    (props: ASelectProps): JSX.Element;
    Option: import("rc-select/lib/Option").OptionFC;
};
export default ASelect;
