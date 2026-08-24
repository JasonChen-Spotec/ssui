import React from 'react';
import type { OptionProps, SelectProps } from 'antd/lib/select';
export interface ASelectProps extends SelectProps {
    className?: string;
    valueRender?: (value: any) => React.ReactNode;
}
declare const ASelect: React.FC<ASelectProps> & {
    Option: React.FC<OptionProps>;
};
export default ASelect;
