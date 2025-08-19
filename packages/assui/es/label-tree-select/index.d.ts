import type { TreeSelectProps } from 'antd/lib/tree-select';
import React from 'react';
export interface LabelTreeSelectProps
  extends Omit<TreeSelectProps<string[]>, 'onDropdownVisibleChange'> {
  /** 输入框的label */
  label?: React.ReactNode;
  /** 输入框value的单位 */
  unit?: React.ReactNode;
  onDropdownVisibleChange?: (value: boolean) => void;
}
declare const LabelTreeSelect: (props: LabelTreeSelectProps) => JSX.Element;
export default LabelTreeSelect;
