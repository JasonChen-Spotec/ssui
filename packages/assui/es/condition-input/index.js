var _excluded = ["regexp", "formatter", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import isArray from 'lodash/isArray';
import Input from "antd/es/input";
import isFunction from 'lodash/isFunction';
import useControllableValue from "ahooks/es/useControllableValue";
import parse2RegexOption from './parse2RegexOption';
var ConditionInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var regexp = props.regexp,
    formatter = props.formatter,
    onChange = props.onChange,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = originalValue;
    if (regexp) {
      var resultRegexp = isArray(regexp) ? regexp : [regexp];
      nextValue = resultRegexp.reduce(function (cur, acc) {
        var regexOption = parse2RegexOption(acc);
        if (regexOption.isValid) {
          return cur.replace(regexOption.pattern, regexOption.replacement);
        }
        return cur;
      }, originalValue);
    }
    if (isFunction(formatter)) {
      nextValue = formatter(nextValue);
    }
    if (value !== nextValue) {
      setValue(nextValue);
    }
  };
  return _jsx(Input, _extends({
    ref: ref,
    value: value,
    onChange: handleChange
  }, rest));
});
export default ConditionInput;