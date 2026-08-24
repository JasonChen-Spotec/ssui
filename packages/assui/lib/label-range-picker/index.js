"use strict";

var _excluded = ["className", "label", "showTime"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var CalendarOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/CalendarOutlined"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var date_picker_1 = tslib_1.__importDefault(require("antd/lib/date-picker"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var RangePicker = date_picker_1["default"].RangePicker;
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var datePickerRef = react_1["default"].useRef(null);
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }),
    open = _ref[0],
    onOpenChange = _ref[1];
  var _ref2 = (0, useControllableValue_1["default"])(props),
    value = _ref2[0],
    setValue = _ref2[1];
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    var _datePickerRef$curren;
    if (!open) {
      onOpenChange(!open);
    }
    (_datePickerRef$curren = datePickerRef.current) == null || _datePickerRef$curren.focus();
  };
  var handleOpenChange = function handleOpenChange(nextOpen) {
    onOpenChange(nextOpen);
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])({
      'label-range-picker': true,
      'label-range-picker-disabled': props.disabled,
      'label-range-picker-label-scale': open || value
    }, className),
    children: [(0, jsx_runtime_1.jsx)(RangePicker, _extends({
      format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD',
      allowEmpty: [true, true],
      showTime: showTime
    }, (0, omit_1["default"])(restProps, 'onOpenChange'), {
      separator: "\u2013",
      open: open,
      onChange: handleChange,
      ref: datePickerRef,
      onOpenChange: handleOpenChange,
      suffixIcon: (0, jsx_runtime_1.jsx)(CalendarOutlined_1["default"], {})
    })), (0, jsx_runtime_1.jsx)("label", {
      className: "label-range-picker-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
exports["default"] = LabelDatePicker;