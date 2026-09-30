import React from 'react';
import type { AutoCompleteProps } from 'antd';
export interface LabelAutoCompleteProps extends AutoCompleteProps {
    label?: React.ReactNode;
    className?: string;
}
declare const LabelAutoComplete: (props: LabelAutoCompleteProps) => import("react/jsx-runtime").JSX.Element;
export default LabelAutoComplete;
