"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGenderType = exports.EMPTY = exports.FEMALE = exports.MALE = void 0;
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var messages_1 = tslib_1.__importDefault(require("../../intl/messages"));
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
  var _appellativeGenderTyp, _genderTypeMap;
  var _ref = (0, react_intl_1.useIntl)(),
    formatMessage = _ref.formatMessage;
  var appellativeGenderTypeMap = (_appellativeGenderTyp = {}, _appellativeGenderTyp[MALE] = formatMessage(messages_1["default"].male), _appellativeGenderTyp[FEMALE] = formatMessage(messages_1["default"].female), _appellativeGenderTyp[EMPTY] = '', _appellativeGenderTyp);
  var genderTypeMap = (_genderTypeMap = {}, _genderTypeMap[MALE] = formatMessage(messages_1["default"].male), _genderTypeMap[FEMALE] = formatMessage(messages_1["default"].female), _genderTypeMap[EMPTY] = '-', _genderTypeMap);
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