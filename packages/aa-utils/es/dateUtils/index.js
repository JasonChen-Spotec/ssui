import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
import moment from 'moment';
import momentTimezone from 'moment-timezone'; // fix ie tz.guess bug;
import 'moment/locale/zh-cn';
var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {
    var _this = this;
    this.currentDateFormat = void 0;
    this.currentTimeFormat = void 0;
    this.currentLocale = void 0;
    this.dateTimeFormat = void 0;
    this.dateFormat = void 0;
    this.timeFormat = void 0;
    this.timeZoneOffset = void 0;
    this.setLocale = function (locale) {
      moment.locale(locale);
    };
    this.createMoment = function (value) {
      if (value) {
        if (isNumber(_this.timeZoneOffset)) {
          var val = moment(value).utc().utcOffset(_this.timeZoneOffset / 60 / 60);
          if (val.isValid()) {
            return val;
          }
        } else {
          var _val = moment(value).local();
          if (_val.isValid()) {
            return _val;
          }
        }
      }
      return null;
    };
    this.formatToTimestamp = function (date) {
      if (date) {
        var m = _this.createMoment(date);
        return m ? +m.valueOf() : +_this.getToday().valueOf();
      }
      return +_this.getToday().valueOf();
    };
    this.utcFormatDate = function (date, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options,
        format = _options.format,
        utcOffset = _options.utcOffset;
      var m = utcOffset ? moment.utc(date).utcOffset(utcOffset) : moment.utc(date);
      return m.format(format || _this.dateTimeFormat);
    };
    this.getToday = function (timeZoneOffset) {
      if (isNumber(timeZoneOffset) || isNumber(_this.timeZoneOffset)) {
        var resultOffset = (isNumber(timeZoneOffset) ? timeZoneOffset : _this.timeZoneOffset) / 60 / 60;
        return moment().utc().utcOffset(resultOffset);
      }
      return moment();
    };
    /** https://momentjs.cn/timezone/docs/#/using-timezones/guessing-user-timezone/ */
    this.getTimeZone = function (ignoreCache) {
      return momentTimezone.tz.guess(ignoreCache != null ? ignoreCache : true);
    };
    this.currentDateFormat = 'YYYY-MM-DD';
    this.currentTimeFormat = 'HH:mm';
    Object.defineProperties(this, {
      locale: {
        get: function get() {
          return this.currentLocale || 'cn';
        },
        set: function set(v) {
          this.currentLocale = v;
          this.onIntlChange();
        }
      }
    });
    Object.defineProperties(this, {
      timeZoneOffset: {
        get: function get() {
          return this.currentANTimeZoneOffset;
        },
        set: function set(v) {
          this.currentANTimeZoneOffset = v;
        }
      }
    });
    Object.defineProperties(this, {
      dateFormat: {
        get: function get() {
          return this.currentDateFormat;
        },
        set: function set(v) {
          this.currentDateFormat = v;
        }
      }
    });
    Object.defineProperties(this, {
      timeFormat: {
        get: function get() {
          return this.currentTimeFormat;
        },
        set: function set(v) {
          this.currentTimeFormat = v;
        }
      }
    });
    Object.defineProperties(this, {
      dateTimeFormat: {
        get: function get() {
          return this.currentDateFormat + " " + this.currentTimeFormat;
        }
      }
    });
  }
  var _proto = DateUtils.prototype;
  _proto.parseDate = function parseDate(date, format) {
    return moment(date, format || this.dateFormat);
  };
  _proto.parseTime = function parseTime(time, format) {
    return moment(time, format || this.timeFormat);
  };
  _proto.parseDateTime = function parseDateTime(dateTime, format) {
    if (isNumber(dateTime) || isDate(dateTime)) {
      return moment(dateTime);
    }
    return moment(dateTime, format || this.dateTimeFormat);
  };
  _proto.formatDate = function formatDate(date, format) {
    var m = this.createMoment(date);
    return m ? m.format(format || this.dateFormat) : '';
  };
  _proto.formatTime = function formatTime(date, format) {
    var m = this.createMoment(date);
    return m ? m.format(format || this.timeFormat) : '';
  };
  _proto.formatDateTime = function formatDateTime(dateTime, format) {
    var m = this.createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  };
  return DateUtils;
}();
export default new DateUtils();