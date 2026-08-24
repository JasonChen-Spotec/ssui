function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import TreeSelect from "antd/es/tree-select";
import classNames from 'classnames';
import omit from 'lodash/omit';
var LabelTreeSelect = function LabelTreeSelect(props) {
  var className = props.className,
    label = props.label,
    unit = props.unit,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
    onDropdownVisibleChange = props.onDropdownVisibleChange;
  var selectRef = React.useRef(null);
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }),
    open = _useControllableValue[0],
    setOpen = _useControllableValue[1];
  var _useControllableValue2 = useControllableValue(props),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];
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
  return _jsxs("div", {
    className: classNames({
      'label-tree-select': true,
      'label-tree-select-label-scale': open || isValueNotEmpty
    }, className),
    children: [_jsx(TreeSelect, _extends({
      showSearch: showSearch
    }, omit(props, ['open', 'onChange', 'className', 'label']), {
      open: open,
      ref: selectRef,
      size: "large",
      className: "label-select-selector",
      onChange: handleChange,
      onDropdownVisibleChange: handleDropdownVisibleChange
    })), isValueNotEmpty && _jsxs("div", {
      className: "label-tree-select-value-length",
      children: [_jsx("span", {
        children: value.length
      }), unit && _jsx("span", {
        children: unit
      })]
    }), _jsx("label", {
      className: "label-tree-select-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
export default LabelTreeSelect;