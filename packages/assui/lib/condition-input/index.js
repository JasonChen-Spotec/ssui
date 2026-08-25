"use strict";

var _excluded = ["regexp", "formatter", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
var input_1 = tslib_1.__importDefault(require("antd/lib/input"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var parse2RegexOption_1 = tslib_1.__importDefault(require("./parse2RegexOption"));
var ConditionInput = React.forwardRef(function (props, ref) {
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
  var regexp = props.regexp,
    formatter = props.formatter,
    onChange = props.onChange,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = originalValue;
    if (regexp) {
      var resultRegexp = (0, isArray_1["default"])(regexp) ? regexp : [regexp];
      nextValue = resultRegexp.reduce(function (cur, acc) {
        var regexOption = (0, parse2RegexOption_1["default"])(acc);
        if (regexOption.isValid) {
          return cur.replace(regexOption.pattern, regexOption.replacement);
        }
        return cur;
      }, originalValue);
    }
    if ((0, isFunction_1["default"])(formatter)) {
      nextValue = formatter(nextValue);
    }
    if (value !== nextValue) {
      setValue(nextValue);
    }
  };
  return (0, jsx_runtime_1.jsx)(input_1["default"], _extends({
    ref: ref,
    value: value,
    onChange: handleChange
  }, rest));
});
exports["default"] = ConditionInput;