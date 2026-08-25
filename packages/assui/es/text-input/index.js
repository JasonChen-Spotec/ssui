var _excluded = ["regexp"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import isArray from 'lodash/isArray';
import ConditionInput from '../condition-input';
var TextInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var regexp = props.regexp,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var trimStartReg = /(^\s+)/g;
  var resultRegexp = trimStartReg;
  if (regexp) {
    resultRegexp = isArray(regexp) ? [trimStartReg].concat(regexp) : [trimStartReg, regexp];
  }
  return _jsx(ConditionInput, _extends({}, restProps, {
    ref: ref,
    regexp: resultRegexp
  }));
});
export default TextInput;