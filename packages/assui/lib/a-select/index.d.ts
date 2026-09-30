import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
type OptionProps = React.ComponentProps<typeof Select.Option>;
export interface ASelectProps extends SelectProps {
    className?: string;
    valueRender?: (value: any) => React.ReactNode;
}
declare const ASelect: React.FC<ASelectProps> & {
    Option: React.FC<OptionProps>;
};
export default ASelect;
