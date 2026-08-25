function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import Select from "antd/es/select";
import classNames from 'classnames';
import isArray from 'lodash/isArray';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import ComplexValSelect from '../complex-val-select';
export var Option = Select.Option;
var LabelSelect = function LabelSelect(props, ref) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur;
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
  React.useImperativeHandle(ref, function () {
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
  return _jsxs("div", {
    className: classNames({
      'label-select': true,
      'label-select-label-scale': open || !isArray(value) && !isUndefined(value) && !isNull(value) || isArray(value) && value.length
    }, className),
    children: [_jsx(ComplexValSelect, _extends({
      maxTagCount: 3,
      showSearch: false
    }, omit(props, ['open', 'onChange', 'className', 'label', 'setOpen', 'isFocus']), {
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
    })), _jsx("label", {
      className: "label-select-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
var ForwardRefLabelSelect = /*#__PURE__*/React.forwardRef(LabelSelect);
export default ForwardRefLabelSelect;