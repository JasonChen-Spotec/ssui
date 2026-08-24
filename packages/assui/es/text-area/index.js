var _excluded = ["value", "onChange", "formatter"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Input from "antd/es/input";
import trimStart from 'lodash/trimStart';
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
    var finallyValue = trimStart(e.target.value);
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
  return _jsx(Input.TextArea, _extends({
    value: resultValue,
    onChange: handleChange
  }, restProps));
};
export default TextArea;