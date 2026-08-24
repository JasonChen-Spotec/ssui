"use strict";

var _excluded = ["onChange", "numberType", "dataType", "precision", "formatter", "parser", "enableMinus", "onBlur", "maxLength"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataTypeEnum = exports.numberTypeEnum = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var input_1 = tslib_1.__importDefault(require("antd/lib/input"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var dataTypeEnum = tslib_1.__importStar(require("./const/dataTypeEnum"));
exports.dataTypeEnum = dataTypeEnum;
var numberTypeEnum = tslib_1.__importStar(require("./const/numberType"));
exports.numberTypeEnum = numberTypeEnum;
var utils_1 = require("./utils");
var NumberInput = React.forwardRef(function (props, ref) {
  var _ref = (0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }),
    value = _ref[0],
    setValue = _ref[1];
  var onChange = props.onChange,
    _props$numberType = props.numberType,
    numberType = _props$numberType === void 0 ? numberTypeEnum.INT : _props$numberType,
    _props$dataType = props.dataType,
    dataType = _props$dataType === void 0 ? dataTypeEnum.NUMBER : _props$dataType,
    precision = props.precision,
    formatter = props.formatter,
    parser = props.parser,
    _props$enableMinus = props.enableMinus,
    enableMinus = _props$enableMinus === void 0 ? false : _props$enableMinus,
    onBlur = props.onBlur,
    maxLength = props.maxLength,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;
    if (numberType === numberTypeEnum.INT) {
      newNumber = (0, utils_1.filterInt)({
        value: newValue,
        preValue: "" + value,
        enableMinus: enableMinus
      });
    } else {
      newNumber = (0, utils_1.filterFloat)({
        value: newValue,
        preValue: "" + value,
        precision: precision != null ? precision : 2,
        enableMinus: enableMinus
      });
    }
    if (parser) {
      newNumber = parser(newNumber);
    }
    if (value !== newNumber) {
      setValue(newNumber);
    }
  };
  var onNumberBlur = function onNumberBlur() {
    var resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    } else if (value && dataType === dataTypeEnum.NUMBER) {
      if (numberType === numberTypeEnum.FLOAT) {
        resultValue = +value;
      } else {
        resultValue = parseInt("" + value, 10);
      }
    }
    setValue(resultValue);
    onBlur == null || onBlur(resultValue);
  };
  var finallyValue = formatter ? formatter("" + value) : value;
  return (0, jsx_runtime_1.jsx)(input_1["default"], _extends({
    type: "text",
    ref: ref,
    value: finallyValue,
    onBlur: onNumberBlur,
    onChange: onNumberChange,
    maxLength: maxLength
  }, (0, omit_1["default"])(restProps, ['value'])));
});
exports["default"] = NumberInput;