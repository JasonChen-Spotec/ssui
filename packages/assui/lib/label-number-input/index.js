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
var useSize_1 = __importDefault(require("ahooks/lib/useSize"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("lodash/omit"));
var number_input_1 = __importDefault(require("../number-input"));
var multi_line_ellipsis_text_1 = __importDefault(require("../multi-line-ellipsis-text"));
var LabelNumberInput = function LabelNumberInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    labelEllipsis = props.labelEllipsis,
    id = props.id,
    _a = props.baseMinWidth,
    baseMinWidth = _a === void 0 ? 50 : _a;
  var numberInputRef = react_1["default"].useRef(null);
  var labelDomRef = react_1["default"].useRef(null);
  var labelSize = (0, useSize_1["default"])(labelDomRef);
  var _b = __read((0, useControllableValue_1["default"])(props), 2),
    value = _b[0],
    setValue = _b[1];
  var _c = __read(react_1["default"].useState(false), 2),
    focused = _c[0],
    setFocused = _c[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    numberInputRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
  };
  var controlMinWidth = (labelSize === null || labelSize === void 0 ? void 0 : labelSize.width) ? labelSize.width + baseMinWidth : undefined;
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-number-input-warper', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    }
  }, react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-number-input-field', {
      'label-number-input-focused': focused,
      'label-number-input-disabled': props.disabled
    })
  }, react_1["default"].createElement(number_input_1["default"], __assign({}, (0, omit_1["default"])(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth']), {
    ref: numberInputRef,
    "data-value": !(0, isUndefined_1["default"])(value) ? "".concat(value).length : 0,
    value: value,
    onBlur: handleBlur,
    onFocus: handleFocus,
    className: "label-number-input",
    onChange: function onChange(inputValue) {
      return setValue(inputValue);
    }
  })), labelEllipsis ? react_1["default"].createElement(multi_line_ellipsis_text_1["default"], {
    text: label,
    lines: 1,
    tipType: "tooltip",
    className: "label-number-input-ellipsis",
    onClick: handleLabelClick
  }) : react_1["default"].createElement("label", {
    className: "label-number-input-text",
    onClick: handleLabelClick
  }, label)));
};
exports["default"] = LabelNumberInput;