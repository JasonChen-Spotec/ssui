import moment from 'moment';
import 'moment/locale/zh-cn';
declare class DateUtils {
    currentDateFormat: string;
    currentTimeFormat: string;
    currentLocale?: string;
    dateTimeFormat?: string;
    dateFormat?: string;
    timeFormat?: string;
    timeZoneOffset?: number;
    constructor();
    setLocale: (locale: string) => void;
    createMoment: (value: moment.MomentInput) => moment.Moment | null;
    parseDate(date: moment.MomentInput, format?: string): moment.Moment;
    parseTime(time: moment.MomentInput, format?: string): moment.Moment;
    parseDateTime(dateTime: moment.MomentInput, format?: string): moment.Moment;
    formatDate(date: moment.MomentInput, format?: string): string;
    formatTime(date: moment.MomentInput, format?: string): string;
    formatDateTime(dateTime: moment.MomentInput, format?: string): string;
    formatToTimestamp: (date?: moment.MomentInput) => number;
    utcFormatDate: (date: moment.MomentInput, options?: {
        format?: string;
        /** 已分钟来设置偏移量，如果输入小于 16 且大于 -16，它会将你的输入解释为小时数。 */
        utcOffset?: number;
    }) => string;
    getToday: (timeZoneOffset?: number) => moment.Moment;
    /** https://momentjs.cn/timezone/docs/#/using-timezones/guessing-user-timezone/ */
    getTimeZone: (ignoreCache?: boolean) => string;
}
declare const _default: DateUtils;
export default _default;
