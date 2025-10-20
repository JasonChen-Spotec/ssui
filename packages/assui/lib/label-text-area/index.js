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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
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
var classnames_1 = __importDefault(require("classnames"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var trimStart_1 = __importDefault(require("lodash/trimStart"));
var LabelTextArea = function LabelTextArea(props) {
  var className = props.className,
    label = props.label,
    id = props.id,
    formatter = props.formatter,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    restProps = __rest(props, ["className", "label", "id", "formatter", "onFocus", "onBlur"]);
  var _a = __read(react_1["default"].useState(false), 2),
    focused = _a[0],
    setFocused = _a[1];
  var _b = __read((0, useControllableValue_1["default"])(props), 2),
    value = _b[0],
    setValue = _b[1];
  var TextAreaDomRef = react_1["default"].useRef(null);
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
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
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-input-control', className),
    id: id
  }, react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-textarea-warper', {
      'textarea-warper-focused': focused
    }),
    onClick: handleLabelClick
  }, react_1["default"].createElement("textarea", __assign({}, restProps, {
    ref: function ref(el) {
      return TextAreaDomRef.current = el;
    },
    "data-value": value ? value.length : 0,
    className: "label-textarea",
    value: value,
    onFocus: handleFocus,
    onChange: handleChange,
    onBlur: handleBlur
  })), react_1["default"].createElement("label", {
    className: "label-textarea-text"
  }, label)));
};
exports["default"] = LabelTextArea;