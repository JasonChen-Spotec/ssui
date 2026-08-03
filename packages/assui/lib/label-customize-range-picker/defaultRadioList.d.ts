import type { Moment } from 'moment';
import type { LangType } from '../messages';
export declare enum dateTypeEnum {
    TODAY = 1,
    YESTERDAY = 2,
    WEEK = 3,
    LAST_WEEK = 4,
    MONTH = 5,
    LAST_MONTH = 6,
    QUARTER = 7,
    LAST_QUARTER = 8,
    BEFORE_7_DAY = 9,
    BEFORE_14_DAY = 10,
    BEFORE_30_DAY = 11,
    BEFORE_90_DAY = 12,
    BEFORE_180_DAY = 13,
    BEFORE_365_DAY = 14,
    YEAR = 15,
    ALL = 16,
    BEFORE_3_MONTH = 17
}
export type RadioListType = {
    key: string | number | dateTypeEnum;
    text: string;
    value: [Moment, Moment];
};
type GetDefaultRadioListPropsType = {
    messages: LangType;
    timeOffset?: number;
    /** 自然日期 */
    naturalDate: boolean;
    /** 展示选项全部 */
    displayAllOption?: boolean;
    /** 选项全部的开始值 */
    startTimeOfAllOption?: Moment;
};
declare const getDefaultRadioList: ({ messages, timeOffset, naturalDate, displayAllOption, startTimeOfAllOption, }: GetDefaultRadioListPropsType) => RadioListType[];
export default getDefaultRadioList;
