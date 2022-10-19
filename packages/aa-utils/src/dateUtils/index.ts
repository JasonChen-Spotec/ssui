import moment from 'moment';
import momentTimezone from 'moment-timezone'; // fix ie tz.guess bug;
import isNumber from 'lodash/isNumber';
import isDate from 'lodash/isDate';

import 'moment/locale/zh-cn';

const createMoment = (value: moment.MomentInput) => {
  if (value) {
    const val = moment(value).utc().local();
    if (val.isValid()) {
      return val;
    }
  }

  return null;
};

class DateUtils {
  currentDateFormat: string;

  currentTimeFormat: string;

  currentLocale: string;

  dateTimeFormat: string;

  dateFormat: string;

  timeFormat: string;

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
    const m = createMoment(date);

    return m ? m.format(format || this.dateFormat) : '';
  }

  formatTime(date: moment.MomentInput, format?: string): string {
    const m = createMoment(date);
    return m ? m.format(format || this.timeFormat) : '';
  }

  formatDateTime(dateTime: moment.MomentInput, format?: string): string {
    const m = createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  }

  formatToTimestamp = (date: moment.MomentInput): number => {
    if (date) {
      const m = createMoment(date);
      return m ? +m.format('x') : +this.getToday().format('x');
    }

    return +this.getToday().format('x');
  };

  getToday = () => moment();

  getTimeZone = () => momentTimezone.tz.guess();
}

export default new DateUtils();
