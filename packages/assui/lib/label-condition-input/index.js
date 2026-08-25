"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var useSize_1 = tslib_1.__importDefault(require("ahooks/lib/useSize"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var condition_input_1 = tslib_1.__importDefault(require("../condition-input"));
var LabelConditionInput = function LabelConditionInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    id = props.id,
    onFocus = props.onFocus,
    _props$baseMinWidth = props.baseMinWidth,
    baseMinWidth = _props$baseMinWidth === void 0 ? 50 : _props$baseMinWidth;
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
  var labelDomRef = react_1["default"].useRef(null);
  var labelSize = (0, useSize_1["default"])(labelDomRef);
  var InputDomRef = react_1["default"].useRef(null);
  var _react_1$default$useS = react_1["default"].useState(false),
    focused = _react_1$default$useS[0],
    setFocused = _react_1$default$useS[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    InputDomRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  var controlMinWidth = labelSize != null && labelSize.width ? labelSize.width + baseMinWidth : undefined;
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('label-condition-input-warper', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    },
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: (0, classnames_1["default"])('label-condition-input-field', {
        'label-condition-input-focused': focused
      }),
      children: [(0, jsx_runtime_1.jsx)(condition_input_1["default"], _extends({}, (0, omit_1["default"])(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth']), {
        ref: InputDomRef,
        "data-value": value ? value.length : 0,
        value: value,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: "label-condition-input",
        onChange: function onChange(inputValue) {
          return setValue(inputValue);
        }
      })), (0, jsx_runtime_1.jsx)("label", {
        ref: labelDomRef,
        className: "label-condition-input-text",
        onClick: handleLabelClick,
        children: label
      })]
    })
  });
};
exports["default"] = LabelConditionInput;