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
exports.Option = void 0;
var react_1 = __importDefault(require("react"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var select_1 = __importDefault(require("antd/lib/select"));
var complex_val_select_1 = __importDefault(require("../complex-val-select"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var isNull_1 = __importDefault(require("lodash/isNull"));
var classnames_1 = __importDefault(require("classnames"));
var ArrowDropDownFilled_1 = __importDefault(require("a-icons/lib/ArrowDropDownFilled"));
var omit_1 = __importDefault(require("lodash/omit"));
var Option = select_1["default"].Option;
exports.Option = Option;
var LabelSelect = function LabelSelect(props, ref) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur;
  var selectRef = react_1["default"].useRef(null);
  var _a = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = __read((0, useControllableValue_1["default"])(props), 2),
    value = _b[0],
    setValue = _b[1];
  react_1["default"].useImperativeHandle(ref, function () {
    return selectRef.current;
  });
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    if (!open) {
      setOpen(!open);
    }
    selectRef.current.focus();
  };
  var onDropdownVisibleChange = function onDropdownVisibleChange(nextOpen) {
    setOpen(nextOpen);
  };
  var handleBlur = function handleBlur() {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
  };
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])({
      'label-select': true,
      'label-select-label-scale': open || !(0, isArray_1["default"])(value) && !(0, isUndefined_1["default"])(value) && !(0, isNull_1["default"])(value) || (0, isArray_1["default"])(value) && value.length
    }, className)
  }, react_1["default"].createElement(complex_val_select_1["default"], __assign({
    maxTagCount: 3,
    showSearch: false
  }, (0, omit_1["default"])(props, ['open', 'onChange', 'className', 'label', 'setOpen', 'isFocus']), {
    open: open,
    ref: selectRef,
    size: "large",
    className: "label-select-selector",
    onChange: handleChange,
    onBlur: handleBlur,
    onDeselect: function onDeselect() {
      var _a;
      (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    onDropdownVisibleChange: onDropdownVisibleChange,
    suffixIcon: react_1["default"].createElement(ArrowDropDownFilled_1["default"], null)
  })), react_1["default"].createElement("label", {
    className: "label-select-text",
    onClick: handleLabelClick
  }, label));
};
var ForwardRefLabelSelect = react_1["default"].forwardRef(LabelSelect);
exports["default"] = ForwardRefLabelSelect;