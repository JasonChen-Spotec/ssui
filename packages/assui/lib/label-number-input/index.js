"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var multi_line_ellipsis_text_1 = tslib_1.__importDefault(require("../multi-line-ellipsis-text"));
var number_input_1 = tslib_1.__importDefault(require("../number-input"));
var LabelNumberInput = function LabelNumberInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    labelEllipsis = props.labelEllipsis,
    id = props.id,
    _props$baseMinWidth = props.baseMinWidth,
    baseMinWidth = _props$baseMinWidth === void 0 ? 50 : _props$baseMinWidth;
  var numberInputRef = react_1["default"].useRef(null);
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
  var _react_1$default$useS = react_1["default"].useState(false),
    focused = _react_1$default$useS[0],
    setFocused = _react_1$default$useS[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    numberInputRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('label-number-input-warper', className),
    id: id,
    style: {
      minWidth: baseMinWidth
    },
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: (0, classnames_1["default"])('label-number-input-field', {
        'label-number-input-focused': focused,
        'label-number-input-disabled': props.disabled
      }),
      children: [(0, jsx_runtime_1.jsx)(number_input_1["default"], _extends({}, (0, omit_1["default"])(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth', 'labelEllipsis']), {
        ref: numberInputRef,
        "data-value": !(0, isUndefined_1["default"])(value) ? ("" + value).length : 0,
        value: value,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: "label-number-input",
        onChange: function onChange(inputValue) {
          return setValue(inputValue);
        }
      })), labelEllipsis ? (0, jsx_runtime_1.jsx)(multi_line_ellipsis_text_1["default"], {
        text: label,
        lines: 1,
        tipType: "tooltip",
        className: "label-number-input-ellipsis",
        onClick: handleLabelClick
      }) :
      // biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label
      (0, jsx_runtime_1.jsx)("label", {
        className: "label-number-input-text",
        onClick: handleLabelClick,
        children: label
      })]
    })
  });
};
exports["default"] = LabelNumberInput;