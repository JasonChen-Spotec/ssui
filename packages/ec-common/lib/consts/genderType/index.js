"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGenderType = exports.EMPTY = exports.FEMALE = exports.MALE = void 0;
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("../../intl/messages"));
/** 男 */
var MALE = 1;
exports.MALE = MALE;
/** 女 */
var FEMALE = 2;
exports.FEMALE = FEMALE;
/** 空 */
var EMPTY = -1;
exports.EMPTY = EMPTY;
var useGenderType = function useGenderType() {
  var _a, _b;
  var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
  var appellativeGenderTypeMap = (_a = {}, _a[MALE] = formatMessage(messages_1["default"].male), _a[FEMALE] = formatMessage(messages_1["default"].female), _a[EMPTY] = '', _a);
  var genderTypeMap = (_b = {}, _b[MALE] = formatMessage(messages_1["default"].male), _b[FEMALE] = formatMessage(messages_1["default"].female), _b[EMPTY] = '-', _b);
  var genderTypeList = [{
    value: MALE,
    label: formatMessage(messages_1["default"].male)
  }, {
    value: FEMALE,
    label: formatMessage(messages_1["default"].female)
  }];
  return {
    genderTypeMap: genderTypeMap,
    genderTypeList: genderTypeList,
    appellativeGenderTypeMap: appellativeGenderTypeMap
  };
};
exports.useGenderType = useGenderType;