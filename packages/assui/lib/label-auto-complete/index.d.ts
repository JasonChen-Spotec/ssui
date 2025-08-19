import type { AutoCompleteProps } from 'antd/lib/auto-complete';
import React from 'react';
export interface LabelAutoCompleteProps extends AutoCompleteProps {
  label?: React.ReactNode;
  className?: string;
}
declare const LabelAutoComplete: (props: LabelAutoCompleteProps) => JSX.Element;
export default LabelAutoComplete;
