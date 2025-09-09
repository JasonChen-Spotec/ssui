"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var moment_1 = __importDefault(require("moment"));
var moment_timezone_1 = __importDefault(require("moment-timezone")); // fix ie tz.guess bug;
var isNumber_1 = __importDefault(require("lodash/isNumber"));
var isDate_1 = __importDefault(require("lodash/isDate"));
require("moment/locale/zh-cn");
var DateUtils = /** @class */function () {
  function DateUtils() {
    var _this = this;
    this.setLocale = function (locale) {
      moment_1["default"].locale(locale);
    };
    this.createMoment = function (value) {
      if (value) {
        if ((0, isNumber_1["default"])(_this.timeZoneOffset)) {
          var val = (0, moment_1["default"])(value).utc().utcOffset(_this.timeZoneOffset / 60 / 60);
          if (val.isValid()) {
            return val;
          }
        } else {
          var val = (0, moment_1["default"])(value).local();
          if (val.isValid()) {
            return val;
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
      var format = options.format,
        utcOffset = options.utcOffset;
      var m = utcOffset ? moment_1["default"].utc(date).utcOffset(utcOffset) : moment_1["default"].utc(date);
      return m.format(format || _this.dateTimeFormat);
    };
    this.getToday = function (timeZoneOffset) {
      if ((0, isNumber_1["default"])(timeZoneOffset) || (0, isNumber_1["default"])(_this.timeZoneOffset)) {
        var resultOffset = ((0, isNumber_1["default"])(timeZoneOffset) ? timeZoneOffset : _this.timeZoneOffset) / 60 / 60;
        return (0, moment_1["default"])().utc().utcOffset(resultOffset);
      }
      return (0, moment_1["default"])();
    };
    /** https://momentjs.cn/timezone/docs/#/using-timezones/guessing-user-timezone/ */
    this.getTimeZone = function (ignoreCache) {
      return moment_timezone_1["default"].tz.guess(ignoreCache !== null && ignoreCache !== void 0 ? ignoreCache : true);
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
          return "".concat(this.currentDateFormat, " ").concat(this.currentTimeFormat);
        }
      }
    });
  }
  DateUtils.prototype.parseDate = function (date, format) {
    return (0, moment_1["default"])(date, format || this.dateFormat);
  };
  DateUtils.prototype.parseTime = function (time, format) {
    return (0, moment_1["default"])(time, format || this.timeFormat);
  };
  DateUtils.prototype.parseDateTime = function (dateTime, format) {
    if ((0, isNumber_1["default"])(dateTime) || (0, isDate_1["default"])(dateTime)) {
      return (0, moment_1["default"])(dateTime);
    }
    return (0, moment_1["default"])(dateTime, format || this.dateTimeFormat);
  };
  DateUtils.prototype.formatDate = function (date, format) {
    var m = this.createMoment(date);
    return m ? m.format(format || this.dateFormat) : '';
  };
  DateUtils.prototype.formatTime = function (date, format) {
    var m = this.createMoment(date);
    return m ? m.format(format || this.timeFormat) : '';
  };
  DateUtils.prototype.formatDateTime = function (dateTime, format) {
    var m = this.createMoment(dateTime);
    return m ? m.format(format || this.dateTimeFormat) : '';
  };
  return DateUtils;
}();
exports["default"] = new DateUtils();