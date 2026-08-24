"use strict";

var _excluded = ["valueRender", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var select_1 = tslib_1.__importDefault(require("antd/lib/select"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var ASelect = Object.assign(function (props) {
  var valueRender = props.valueRender,
    className = props.className,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    onChange = _ref[1];
  if (!valueRender) {
    return (0, jsx_runtime_1.jsx)(select_1["default"], _extends({
      className: className
    }, restProps, {
      value: value,
      onChange: onChange
    }));
  }
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])('a-select-wrap', className),
    children: [(0, jsx_runtime_1.jsx)("div", {
      className: "a-select-value-wrap",
      children: valueRender(value)
    }), (0, jsx_runtime_1.jsx)(select_1["default"], _extends({}, restProps, {
      value: value,
      onChange: onChange
    }))]
  });
}, {
  Option: select_1["default"].Option
});
exports["default"] = ASelect;