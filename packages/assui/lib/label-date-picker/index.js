"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var CalendarOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/CalendarOutlined"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var antd_1 = require("antd");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime;
  var datePickerRef = react_1["default"].useRef(null);
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
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    if (!open) {
      setOpen(!open);
    }
    datePickerRef.current.focus();
  };
  var onBlur = function onBlur() {
    setOpen(false);
  };
  var onOpenChange = function onOpenChange(nextOpen) {
    setOpen(nextOpen);
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])({
      'label-date-picker': true,
      'label-date-picker-label-scale': open || value
    }, className),
    children: [(0, jsx_runtime_1.jsx)(antd_1.DatePicker, _extends({
      format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
    }, props, {
      open: open,
      onChange: handleChange,
      ref: datePickerRef,
      onOpenChange: onOpenChange,
      onBlur: onBlur,
      placeholder: "",
      suffixIcon: (0, jsx_runtime_1.jsx)(CalendarOutlined_1["default"], {})
    })), (0, jsx_runtime_1.jsx)("label", {
      className: "label-date-picker-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
exports["default"] = LabelDatePicker;