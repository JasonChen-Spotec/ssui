import React from 'react';
import type { TreeSelectProps } from 'antd/lib/tree-select';
export interface LabelTreeSelectProps extends Omit<TreeSelectProps<string[]>, 'onDropdownVisibleChange'> {
    /** 输入框的label */
    label?: React.ReactNode;
    /** 输入框value的单位 */
    unit?: React.ReactNode;
    onDropdownVisibleChange?: (value: boolean) => void;
}
declare const LabelTreeSelect: (props: LabelTreeSelectProps) => import("react/jsx-runtime").JSX.Element;
export default LabelTreeSelect;
