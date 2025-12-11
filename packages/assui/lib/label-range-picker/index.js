"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
var date_picker_1 = __importDefault(require("antd/lib/date-picker"));
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("lodash/omit"));
var CalendarOutlined_1 = __importDefault(require("a-icons/lib/CalendarOutlined"));
var RangePicker = date_picker_1["default"].RangePicker;
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime,
    restProps = __rest(props, ["className", "label", "showTime"]);
  var datePickerRef = react_1["default"].useRef(null);
  var _a = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }), 2),
    open = _a[0],
    onOpenChange = _a[1];
  var _b = __read((0, useControllableValue_1["default"])(props), 2),
    value = _b[0],
    setValue = _b[1];
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    var _a;
    if (!open) {
      onOpenChange(!open);
    }
    (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  };
  var handleOpenChange = function handleOpenChange(nextOpen) {
    onOpenChange(nextOpen);
  };
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])({
      'label-range-picker': true,
      'label-range-picker-disabled': props.disabled,
      'label-range-picker-label-scale': open || value
    }, className)
  }, react_1["default"].createElement(RangePicker, __assign({
    format: showTime ? 'YYYY.MM.DD HH:mm:ss' : 'YYYY.MM.DD',
    allowEmpty: [true, true],
    showTime: showTime
  }, (0, omit_1["default"])(restProps, 'onOpenChange'), {
    separator: "\u2013",
    open: open,
    onChange: handleChange,
    ref: datePickerRef,
    onOpenChange: handleOpenChange,
    suffixIcon: react_1["default"].createElement(CalendarOutlined_1["default"], null)
  })), react_1["default"].createElement("label", {
    className: "label-range-picker-text",
    onClick: handleLabelClick
  }, label));
};
exports["default"] = LabelDatePicker;