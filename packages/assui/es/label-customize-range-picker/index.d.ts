import React from 'react';
import type { Moment } from 'moment';
import type { dateTypeEnum } from './defaultRadioList';
import type { LabelRangePickerProps } from '../label-range-picker';
export type RadioListType = {
    key: string | number | dateTypeEnum;
    text: string;
    value: [Moment, Moment];
};
export interface LabelCustomizeRangePickerProps extends Omit<LabelRangePickerProps, 'label'> {
    radioList?: RadioListType[];
    customizeTimeList?: dateTypeEnum[];
    rangePickerType?: 'label' | 'origin';
    label?: React.ReactNode;
    /** 最大时间范围 */
    maxScope?: number;
    /** 如果有MaxScope，在没有默认值的情况下自动填充默认值 */
    fillDefaultDate?: boolean;
    showShortcutPanel?: boolean;
    /** 时间偏移量 秒 */
    timeOffset?: number;
    /** 自然日期, 作用于本周，本月等日期 */
    naturalDate?: boolean;
    /** 展示选项全部 */
    displayAllOption?: boolean;
    /** 选项全部的开始值 */
    startTimeOfAllOption?: Moment;
}
declare const LabelCustomizeRangePicker: (props: LabelCustomizeRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export default LabelCustomizeRangePicker;
