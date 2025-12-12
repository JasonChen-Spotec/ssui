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
var useClickAway_1 = __importDefault(require("ahooks/lib/useClickAway"));
var classnames_1 = __importDefault(require("classnames"));
var number_input_1 = __importDefault(require("../number-input"));
var defaultValue = {
  startInterval: '',
  endInterval: ''
};
var LabelDatePicker = function LabelDatePicker(props) {
  var disabled = props.disabled,
    className = props.className,
    label = props.label,
    enableMinus = props.enableMinus,
    numberType = props.numberType,
    dataType = props.dataType,
    precision = props.precision,
    connector = props.connector,
    onBlur = props.onBlur,
    startNumberInputProps = props.startNumberInputProps,
    endNumberInputProps = props.endNumberInputProps;
  var containerRef = react_1["default"].useRef(null);
  var startNumberRef = react_1["default"].useRef(null);
  var _a = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'focus',
      trigger: 'onFocus'
    }), 2),
    focus = _a[0],
    onFocus = _a[1];
  var _b = __read((0, useControllableValue_1["default"])(props, {
      defaultValue: {
        startInterval: '',
        endInterval: ''
      }
    }), 2),
    value = _b[0],
    onChangeValue = _b[1];
  (0, useClickAway_1["default"])(function () {
    if (focus) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
    }
    onFocus(false);
  }, containerRef);
  var onStartChange = function onStartChange(startInterval) {
    onChangeValue(__assign(__assign({}, value), {
      startInterval: startInterval
    }));
  };
  var onEndChange = function onEndChange(endInterval) {
    onChangeValue(__assign(__assign({}, value), {
      endInterval: endInterval
    }));
  };
  var handleLabelClick = function handleLabelClick() {
    var _a;
    if (!focus) {
      onFocus(!focus);
    }
    (_a = startNumberRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  };
  var onHandleFocus = function onHandleFocus() {
    if (!focus) {
      onFocus(true);
    }
  };
  var resultValue = value || defaultValue;
  return react_1["default"].createElement("div", {
    ref: containerRef,
    className: (0, classnames_1["default"])({
      'label-range-number': true,
      'label-range-number-disabled': disabled,
      'label-range-number-focused': focus,
      'label-range-number-label-scale': focus || resultValue.endInterval || resultValue.startInterval
    }, className)
  }, react_1["default"].createElement("div", {
    className: "a-number a-number-range",
    "aria-required": "true"
  }, react_1["default"].createElement("div", {
    className: "a-number-input"
  }, react_1["default"].createElement(number_input_1["default"], __assign({
    bordered: false,
    enableMinus: enableMinus,
    numberType: numberType,
    precision: precision,
    dataType: dataType
  }, endNumberInputProps, {
    ref: startNumberRef,
    onFocus: onHandleFocus,
    onChange: onStartChange,
    value: resultValue.startInterval
  }))), react_1["default"].createElement("div", {
    className: "a-number-range-separator"
  }, connector || '–'), react_1["default"].createElement("div", {
    className: "a-number-input"
  }, react_1["default"].createElement(number_input_1["default"], __assign({
    bordered: false,
    enableMinus: enableMinus,
    onFocus: onFocus,
    numberType: numberType,
    precision: precision,
    dataType: dataType
  }, startNumberInputProps, {
    onChange: onEndChange,
    value: resultValue.endInterval
  })))), react_1["default"].createElement("label", {
    className: "label-range-number-text",
    onClick: handleLabelClick
  }, label));
};
exports["default"] = LabelDatePicker;