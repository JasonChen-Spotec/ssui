import moment from 'moment';
import momentTimezone from 'moment-timezone'; // fix ie tz.guess bug;
import isNumber from 'lodash/isNumber';
import isDate from 'lodash/isDate';

import 'moment/locale/zh-cn';

class DateUtils {
  currentDateFormat: string;

  currentTimeFormat: string;

  currentLocale: string;

  dateTimeFormat: string;

  dateFormat: string;

  timeFormat: string;

  timeZoneOffset: number;

  constructor() {
    this.currentDateFormat = 'YYYY-MM-DD';
    this.currentTimeFormat = 'HH:mm';

    Object.defineProperties(this, {
      locale: {
        get() {
          return this.currentLocale || 'cn';
        },
        set(v) {
          this.currentLocale = v;
          this.onIntlChange();
        },
      },
    });

    Object.defineProperties(this, {
      timeZoneOffset: {
        get() {
          return this.currentANTimeZoneOffset;
        },
        set(v) {
          this.currentANTimeZoneOffset = v;
        },
      },
    });

    Object.defineProperties(this, {
      dateFormat: {
        get() {
          return this.currentDateFormat;
        },
        set(v) {
          this.currentDateFormat = v;
        },
      },
    });

    Object.defineProperties(this, {
      timeFormat: {
        get() {
          return this.currentTimeFormat;
        },
        set(v) {
          this.currentTimeFormat = v;
        },
      },
    });

    Object.defineProperties(this, {
      dateTimeFormat: {
        get() {
          return `${this.currentDateFormat} ${this.currentTimeFormat}`;
        },
      },
    });
  }

  setLocale = (locale: string) => {
    moment.locale(locale);
  };

  createMoment = (value: moment.MomentInput) => {
    if (value) {
      if (isNumber(this.timeZoneOffset)) {
        const val = moment(value)
          .utc()
          .utcOffset(this.timeZoneOffset / 60 / 60);
        if (val.isValid()) {
          return val;
        }
      } else {
        const val = moment(value).local();
        if (val.isValid()) {
          return val;
        }
      }
    }

    return null;
  };

  parseDate(date: moment.MomentInput, format?: string) {
    return moment(date, format || this.dateFormat);
  }

  parseTime(time: moment.MomentInput, format?: string) {
    return moment(time, format || this.timeFormat);
  }

  parseDateTime(dateTime: moment.MomentInput, format?: string) {
    if (isNumber(dateTime) || isDate(dateTime)) {
      return moment(dateTime);
    }

    return moment(dateTime, format || this.dateTimeFormat);
  }

  formatDate(date: moment.MomentInput, format?: string): string {
    const m = this.createMoment(date);

    return m ? m.format(format || this.dateFormat) : '';
  }

  formatTime(date: moment.MomentInput, format?: string): string {
    const m = this.createMoment(date);
    return m ? m.format(format || this.timeFormat) : '';
  }

  formatDateTime(dateTime: moment.MomentInput, format?: string): string {
    const m = this.createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  }

  formatToTimestamp = (date?: moment.MomentInput): number => {
    if (date) {
      const m = this.createMoment(date);
      return m ? +m.valueOf() : +this.getToday().valueOf();
    }

    return +this.getToday().valueOf();
  };

  utcFormatDate = (
    date: moment.MomentInput,
    options: {
      format?: string;
      /** 已分钟来设置偏移量，如果输入小于 16 且大于 -16，它会将你的输入解释为小时数。 */
      utcOffset?: number;
    } = {},
  ): string => {
    const { format, utcOffset } = options;
    const m = utcOffset ? moment.utc(date).utcOffset(utcOffset) : moment.utc(date);
    return m.format(format || this.dateTimeFormat);
  };

  getToday = (timeZoneOffset?: number) => {
    if (isNumber(timeZoneOffset) || isNumber(this.timeZoneOffset)) {
      const resultOffset =
        (isNumber(timeZoneOffset) ? timeZoneOffset : this.timeZoneOffset) / 60 / 60;
      return moment().utc().utcOffset(resultOffset);
    }

    return moment();
  };

  /** https://momentjs.cn/timezone/docs/#/using-timezones/guessing-user-timezone/ */
  getTimeZone = (ignoreCache?: boolean) => momentTimezone.tz.guess(ignoreCache ?? true);
}

export default new DateUtils();
