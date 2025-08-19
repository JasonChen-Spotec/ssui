import type { SelectProps } from 'antd/lib/select';
import React from 'react';
export interface ASelectProps extends SelectProps {
  className?: string;
  valueRender?: (value: any) => React.ReactNode;
}
declare const ASelect: {
  (props: ASelectProps): JSX.Element;
  Option: import('rc-select/lib/Option').OptionFC;
};
export default ASelect;
