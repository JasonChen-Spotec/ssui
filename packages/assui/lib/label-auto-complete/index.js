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
var auto_complete_1 = __importDefault(require("antd/lib/auto-complete"));
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("lodash/omit"));
var trimStart_1 = __importDefault(require("lodash/trimStart"));
var LabelAutoComplete = function LabelAutoComplete(props) {
  var className = props.className,
    label = props.label,
    onChange = props.onChange,
    options = props.options,
    onBlur = props.onBlur;
  var autoComplete = react_1["default"].useRef(null);
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
    var finallyValue = (0, trimStart_1["default"])(nextValue);
    setValue(finallyValue);
    onChange && onChange(finallyValue, options || []);
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
    onBlur && onBlur(event);
  };
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])({
      'label-auto-complete': true,
      'label-auto-complete-label-scale': open || value
    }, className)
  }, react_1["default"].createElement(auto_complete_1["default"], __assign({}, (0, omit_1["default"])(props, ['open', 'onChange', 'className', 'label']), {
    open: open,
    ref: autoComplete,
    value: value,
    onBlur: handleBlur,
    size: "large",
    className: "label-auto-complete-selector",
    onChange: handleChange,
    onDropdownVisibleChange: onDropdownVisibleChange
  })), react_1["default"].createElement("label", {
    className: "label-auto-complete-text",
    onClick: handleLabelClick
  }, label));
};
exports["default"] = LabelAutoComplete;