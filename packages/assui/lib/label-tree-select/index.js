"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var tree_select_1 = tslib_1.__importDefault(require("antd/lib/tree-select"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var LabelTreeSelect = function LabelTreeSelect(props) {
  var className = props.className,
    label = props.label,
    unit = props.unit,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
    onDropdownVisibleChange = props.onDropdownVisibleChange;
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
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    var _selectRef$current;
    if (!open) {
      setOpen(!open);
    }
    (_selectRef$current = selectRef.current) == null || _selectRef$current.focus();
  };
  var handleDropdownVisibleChange = function handleDropdownVisibleChange(nextOpen) {
    setOpen(nextOpen);
    onDropdownVisibleChange == null || onDropdownVisibleChange(nextOpen);
  };
  var isValueNotEmpty = !!(value != null && value.length);
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])({
      'label-tree-select': true,
      'label-tree-select-label-scale': open || isValueNotEmpty
    }, className),
    children: [(0, jsx_runtime_1.jsx)(tree_select_1["default"], _extends({
      showSearch: showSearch
    }, (0, omit_1["default"])(props, ['open', 'onChange', 'className', 'label']), {
      open: open,
      ref: selectRef,
      size: "large",
      className: "label-select-selector",
      onChange: handleChange,
      onDropdownVisibleChange: handleDropdownVisibleChange
    })), isValueNotEmpty && (0, jsx_runtime_1.jsxs)("div", {
      className: "label-tree-select-value-length",
      children: [(0, jsx_runtime_1.jsx)("span", {
        children: value.length
      }), unit && (0, jsx_runtime_1.jsx)("span", {
        children: unit
      })]
    }), (0, jsx_runtime_1.jsx)("label", {
      className: "label-tree-select-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
exports["default"] = LabelTreeSelect;