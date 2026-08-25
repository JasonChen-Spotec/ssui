"use strict";

var _excluded = ["value", "onChange", "formatter"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var input_1 = tslib_1.__importDefault(require("antd/lib/input"));
var trimStart_1 = tslib_1.__importDefault(require("lodash/trimStart"));
var TextArea = function TextArea(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    formatter = _ref.formatter,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _React$useState = React.useState(''),
    textValue = _React$useState[0],
    setTextValue = _React$useState[1];
  var isControl = value !== undefined;
  var resultValue = isControl ? value : textValue;
  var handleChange = function handleChange(e) {
    var finallyValue = (0, trimStart_1["default"])(e.target.value);
    if (formatter) {
      finallyValue = formatter(finallyValue);
    }
    if (!isControl) {
      setTextValue(finallyValue);
    }
    if (onChange) {
      onChange(finallyValue, e);
    }
  };
  return (0, jsx_runtime_1.jsx)(input_1["default"].TextArea, _extends({
    value: resultValue,
    onChange: handleChange
  }, restProps));
};
exports["default"] = TextArea;