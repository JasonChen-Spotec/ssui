"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var auto_complete_1 = tslib_1.__importDefault(require("antd/lib/auto-complete"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var trimStart_1 = tslib_1.__importDefault(require("lodash/trimStart"));
var LabelAutoComplete = function LabelAutoComplete(props) {
  var className = props.className,
    label = props.label,
    onChange = props.onChange,
    options = props.options,
    onBlur = props.onBlur;
  var autoComplete = react_1["default"].useRef(null);
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }),
    open = _ref[0],
    setOpen = _ref[1];
  var _ref2 = (0, useControllableValue_1["default"])(props),
    value = _ref2[0],
    setValue = _ref2[1];
  var handleChange = function handleChange(nextValue) {
    var finallyValue = (0, trimStart_1["default"])(nextValue);
    setValue(finallyValue);
    onChange == null || onChange(finallyValue, options || []);
  };
  var handleLabelClick = function handleLabelClick() {
    if (!open) {
      setOpen(!open);
    }
    autoComplete.current.focus();
  };
  var onDropdownVisibleChange = function onDropdownVisibleChange(nextOpen) {
    setOpen(nextOpen);
  };
  var handleBlur = function handleBlur(event) {
    if (value === '' || !value) {
      setOpen(false);
    }
    onBlur == null || onBlur(event);
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])({
      'label-auto-complete': true,
      'label-auto-complete-label-scale': open || value
    }, className),
    children: [(0, jsx_runtime_1.jsx)(auto_complete_1["default"], _extends({}, (0, omit_1["default"])(props, ['open', 'onChange', 'className', 'label']), {
      open: open,
      ref: autoComplete,
      value: value,
      onBlur: handleBlur,
      size: "large",
      className: "label-auto-complete-selector",
      onChange: handleChange,
      onDropdownVisibleChange: onDropdownVisibleChange
    })), (0, jsx_runtime_1.jsx)("label", {
      className: "label-auto-complete-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
exports["default"] = LabelAutoComplete;