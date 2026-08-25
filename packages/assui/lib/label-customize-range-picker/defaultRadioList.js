"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTypeEnum = void 0;
var tslib_1 = require("tslib");
var dateUtils_1 = tslib_1.__importDefault(require("aa-utils/lib/dateUtils"));
var lodash_1 = require("lodash");
var messages_1 = tslib_1.__importStar(require("../messages"));
var dateTypeEnum;
(function (dateTypeEnum) {
  dateTypeEnum[dateTypeEnum["TODAY"] = 1] = "TODAY";
  dateTypeEnum[dateTypeEnum["YESTERDAY"] = 2] = "YESTERDAY";
  dateTypeEnum[dateTypeEnum["WEEK"] = 3] = "WEEK";
  dateTypeEnum[dateTypeEnum["LAST_WEEK"] = 4] = "LAST_WEEK";
  dateTypeEnum[dateTypeEnum["MONTH"] = 5] = "MONTH";
  dateTypeEnum[dateTypeEnum["LAST_MONTH"] = 6] = "LAST_MONTH";
  dateTypeEnum[dateTypeEnum["QUARTER"] = 7] = "QUARTER";
  dateTypeEnum[dateTypeEnum["LAST_QUARTER"] = 8] = "LAST_QUARTER";
  dateTypeEnum[dateTypeEnum["BEFORE_7_DAY"] = 9] = "BEFORE_7_DAY";
  dateTypeEnum[dateTypeEnum["BEFORE_14_DAY"] = 10] = "BEFORE_14_DAY";
  dateTypeEnum[dateTypeEnum["BEFORE_30_DAY"] = 11] = "BEFORE_30_DAY";
  dateTypeEnum[dateTypeEnum["BEFORE_90_DAY"] = 12] = "BEFORE_90_DAY";
  dateTypeEnum[dateTypeEnum["BEFORE_180_DAY"] = 13] = "BEFORE_180_DAY";
  dateTypeEnum[dateTypeEnum["BEFORE_365_DAY"] = 14] = "BEFORE_365_DAY";
  dateTypeEnum[dateTypeEnum["YEAR"] = 15] = "YEAR";
  dateTypeEnum[dateTypeEnum["ALL"] = 16] = "ALL";
  dateTypeEnum[dateTypeEnum["BEFORE_3_MONTH"] = 17] = "BEFORE_3_MONTH";
})(dateTypeEnum || (exports.dateTypeEnum = dateTypeEnum = {}));
var getDefaultRadioList = function getDefaultRadioList(_ref) {
  var messages = _ref.messages,
    timeOffset = _ref.timeOffset,
    naturalDate = _ref.naturalDate,
    _ref$displayAllOption = _ref.displayAllOption,
    displayAllOption = _ref$displayAllOption === void 0 ? false : _ref$displayAllOption,
    startTimeOfAllOption = _ref.startTimeOfAllOption;
  var now = (0, lodash_1.isNumber)(timeOffset) ? dateUtils_1["default"].getToday(timeOffset) : dateUtils_1["default"].getToday();
  var allRadio = displayAllOption ? [{
    key: dateTypeEnum.ALL,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'all'),
    value: [startTimeOfAllOption || dateUtils_1["default"].parseDate('2022/09/01'), now.endOf('day')]
  }] : [];
  var defaultRadioList = [{
    key: dateTypeEnum.TODAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'toDay'),
    value: [now.clone().startOf('day'), now.clone().endOf('day')]
  }, {
    key: dateTypeEnum.YESTERDAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'yesterDay'),
    value: [now.clone().subtract(1, 'day').startOf('day'), now.clone().subtract(1, 'day').endOf('day')]
  }, {
    key: dateTypeEnum.WEEK,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'week'),
    value: [now.clone().startOf('week'), naturalDate ? now.clone().endOf('week') : now.clone().endOf('day')]
  }, {
    key: dateTypeEnum.LAST_WEEK,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'lastWeek'),
    value: [now.clone().subtract(1, 'week').startOf('week'), now.clone().subtract(1, 'week').endOf('week')]
  }, {
    key: dateTypeEnum.MONTH,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'month'),
    value: [now.clone().startOf('month'), naturalDate ? now.clone().endOf('month') : now.clone().endOf('day')]
  }, {
    key: dateTypeEnum.LAST_MONTH,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'lastMonth'),
    value: [now.clone().subtract(1, 'month').startOf('month'), now.clone().subtract(1, 'month').endOf('month')]
  }, {
    key: dateTypeEnum.QUARTER,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'quarter'),
    value: [now.clone().startOf('quarter'), naturalDate ? now.clone().endOf('quarter') : now.clone().endOf('day')]
  }, {
    key: dateTypeEnum.LAST_QUARTER,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'lastQuarter'),
    value: [now.clone().subtract(1, 'quarter').startOf('quarter'), now.clone().subtract(1, 'quarter').endOf('quarter')]
  }, {
    key: dateTypeEnum.YEAR,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'year'),
    value: [now.clone().startOf('year'), naturalDate ? now.clone().endOf('year') : now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_7_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last7days'),
    value: [now.clone().subtract(6, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_14_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last14days'),
    value: [now.clone().subtract(13, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_30_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last30days'),
    value: [now.clone().subtract(29, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_90_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last90days'),
    value: [now.clone().subtract(89, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_180_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last180days'),
    value: [now.clone().subtract(179, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_365_DAY,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last365days'),
    value: [now.clone().subtract(364, 'day').startOf('day'), now.endOf('day')]
  }, {
    key: dateTypeEnum.BEFORE_3_MONTH,
    text: (0, messages_1["default"])(messages, messages_1.langTypeEnum.labelCustomizeRangePicker, 'last3months'),
    value: [now.clone().subtract(2, 'month').startOf('month'), now.endOf('day')]
  }].concat(allRadio);
  return defaultRadioList;
};
exports["default"] = getDefaultRadioList;