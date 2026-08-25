"use strict";

var _excluded = ["regexp"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
var condition_input_1 = tslib_1.__importDefault(require("../condition-input"));
var TextInput = react_1["default"].forwardRef(function (props, ref) {
  var regexp = props.regexp,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var trimStartReg = /(^\s+)/g;
  var resultRegexp = trimStartReg;
  if (regexp) {
    resultRegexp = (0, isArray_1["default"])(regexp) ? [trimStartReg].concat(regexp) : [trimStartReg, regexp];
  }
  return (0, jsx_runtime_1.jsx)(condition_input_1["default"], _extends({}, restProps, {
    ref: ref,
    regexp: resultRegexp
  }));
});
exports["default"] = TextInput;