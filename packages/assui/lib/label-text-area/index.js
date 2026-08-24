"use strict";

var _excluded = ["className", "label", "id", "formatter", "onFocus", "onBlur"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var trimStart_1 = tslib_1.__importDefault(require("lodash/trimStart"));
var LabelTextArea = function LabelTextArea(props) {
  var className = props.className,
    label = props.label,
    id = props.id,
    formatter = props.formatter,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _react_1$default$useS = react_1["default"].useState(false),
    focused = _react_1$default$useS[0],
    setFocused = _react_1$default$useS[1];
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
  var TextAreaDomRef = react_1["default"].useRef(null);
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  var handleLabelClick = function handleLabelClick() {
    TextAreaDomRef.current.focus();
  };
  var handleChange = function handleChange(e) {
    var finallyValue = (0, trimStart_1["default"])(e.target.value);
    if (formatter) {
      finallyValue = formatter(finallyValue);
    }
    setValue(finallyValue);
  };
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('label-input-control', className),
    id: id,
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: (0, classnames_1["default"])('label-textarea-warper', {
        'textarea-warper-focused': focused
      }),
      onClick: handleLabelClick,
      children: [(0, jsx_runtime_1.jsx)("textarea", _extends({}, restProps, {
        ref: function ref(el) {
          return TextAreaDomRef.current = el;
        },
        "data-value": value ? value.length : 0,
        className: "label-textarea",
        value: value,
        onFocus: handleFocus,
        onChange: handleChange,
        onBlur: handleBlur
      })), (0, jsx_runtime_1.jsx)("label", {
        className: "label-textarea-text",
        children: label
      })]
    })
  });
};
exports["default"] = LabelTextArea;