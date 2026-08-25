import type { Moment } from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
/** 1整天的毫秒数 */
export declare const ONE_DAY_MILLISECOND: number;
/** 1分钟的毫秒数 */
export declare const ONE_MINUTE_MILLISECOND: number;
export declare const formatMaxScope: (dateStampTuple: RangeValue<Moment>, maxScope: number) => (Moment | null)[];
/** 开始时间和结束时间相差的天数 */
export declare const getDateDiffScope: (date: [Moment, Moment], maxScope: number) => number;
/** showTime下的所需的时间撮 */
export declare const getTimeDiffOfShowTime: (scope: number) => number;
