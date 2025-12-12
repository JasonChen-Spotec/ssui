"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var antd_1 = require("antd");
var CalendarOutlined_1 = __importDefault(require("a-icons/lib/CalendarOutlined"));
var classnames_1 = __importDefault(require("classnames"));
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label;
  var datePickerRef = react_1["default"].useRef(null);
  var _a = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = __read((0, useControllableValue_1["default"])(props), 2),
    value = _b[0],
    setValue = _b[1];
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
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])({
      'label-date-picker': true,
      'label-date-picker-label-scale': open || value
    }, className)
  }, react_1["default"].createElement(antd_1.DatePicker, __assign({}, props, {
    open: open,
    onChange: handleChange,
    ref: datePickerRef,
    onOpenChange: onOpenChange,
    onBlur: onBlur,
    placeholder: "",
    suffixIcon: react_1["default"].createElement(CalendarOutlined_1["default"], null)
  })), react_1["default"].createElement("label", {
    className: "label-date-picker-text",
    onClick: handleLabelClick
  }, label));
};
exports["default"] = LabelDatePicker;