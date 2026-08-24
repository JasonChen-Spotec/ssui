"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var select_1 = tslib_1.__importDefault(require("antd/lib/select"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
var isNull_1 = tslib_1.__importDefault(require("lodash/isNull"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var complex_val_select_1 = tslib_1.__importDefault(require("../complex-val-select"));
exports.Option = select_1["default"].Option;
var LabelSelect = function LabelSelect(props, ref) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur;
  var selectRef = react_1["default"].useRef(null);
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }),
    open = _ref[0],
    setOpen = _ref[1];
  var _ref2 = (0, useControllableValue_1["default"])(props),
    value = _ref2[0],
    setValue = _ref2[1];
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
    onBlur == null || onBlur(value);
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])({
      'label-select': true,
      'label-select-label-scale': open || !(0, isArray_1["default"])(value) && !(0, isUndefined_1["default"])(value) && !(0, isNull_1["default"])(value) || (0, isArray_1["default"])(value) && value.length
    }, className),
    children: [(0, jsx_runtime_1.jsx)(complex_val_select_1["default"], _extends({
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
        var _selectRef$current;
        (_selectRef$current = selectRef.current) == null || _selectRef$current.focus();
      },
      onDropdownVisibleChange: onDropdownVisibleChange
    })), (0, jsx_runtime_1.jsx)("label", {
      className: "label-select-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
var ForwardRefLabelSelect = react_1["default"].forwardRef(LabelSelect);
exports["default"] = ForwardRefLabelSelect;