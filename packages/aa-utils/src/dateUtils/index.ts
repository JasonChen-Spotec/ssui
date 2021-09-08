import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isNumber from 'lodash/isNumber';
import isDate from 'lodash/isDate';
import duration from 'dayjs/plugin/duration';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(localeData);
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear);
dayjs.extend(utc);
dayjs.extend(timezone);

const createMoment = (value: dayjs.Dayjs) => {
  if (value) {
    const val = dayjs(value).utc().local();

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
    this.currentTimeFormat = 'HH:mm:ss';

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

  parseDate(date: dayjs.ConfigType, format?: string): dayjs.Dayjs {
    return dayjs(date, format || this.dateFormat);
  }

  parseTime(time: dayjs.ConfigType, format?: string): dayjs.Dayjs {
    return dayjs(time, format || this.timeFormat);
  }

  parseDateTime(dateTime: dayjs.ConfigType | number, format?: string): dayjs.Dayjs {
    if (isNumber(dateTime) || isDate(dateTime)) {
      return dayjs(dateTime);
    }

    return dayjs(dateTime, format || this.dateTimeFormat);
  }

  formatDate(date: dayjs.Dayjs, format?: string): string {
    const m = createMoment(date);

    return m ? m.format(format || this.dateFormat) : '';
  }

  formatTime(date: dayjs.Dayjs, format?: string): string {
    const m = createMoment(date);
    return m ? m.format(format || this.timeFormat) : '';
  }

  formatDateTime(dateTime: dayjs.Dayjs, format?: string): string {
    const m = createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  }

  formatToTimestamp = (date?: dayjs.Dayjs | Date): number => {
    if (date) {
      return date.valueOf();
    }

    return this.getToday().valueOf();
  };

  getToday = (): dayjs.Dayjs => dayjs();

  getTimeZone = () => dayjs.tz.guess();
}

export default new DateUtils();
