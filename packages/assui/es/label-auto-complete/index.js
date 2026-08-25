function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import AutoComplete from "antd/es/auto-complete";
import classNames from 'classnames';
import omit from 'lodash/omit';
import trimStart from 'lodash/trimStart';
var LabelAutoComplete = function LabelAutoComplete(props) {
  var className = props.className,
    label = props.label,
    onChange = props.onChange,
    options = props.options,
    onBlur = props.onBlur;
  var autoComplete = React.useRef(null);
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
    var finallyValue = trimStart(nextValue);
    setValue(finallyValue);
    onChange == null || onChange(finallyValue, options || []);
  };
  var handleLabelClick = function handleLabelClick() {
    if (!open) {
      setOpen(!open);
    }
    autoComplete.current.focus();
  };
  var onDropdownVisibleChange = function onDropdownVisibleChange(nextOpen) {
    setOpen(nextOpen);
  };
  var handleBlur = function handleBlur(event) {
    if (value === '' || !value) {
      setOpen(false);
    }
    onBlur == null || onBlur(event);
  };
  return _jsxs("div", {
    className: classNames({
      'label-auto-complete': true,
      'label-auto-complete-label-scale': open || value
    }, className),
    children: [_jsx(AutoComplete, _extends({}, omit(props, ['open', 'onChange', 'className', 'label']), {
      open: open,
      ref: autoComplete,
      value: value,
      onBlur: handleBlur,
      size: "large",
      className: "label-auto-complete-selector",
      onChange: handleChange,
      onDropdownVisibleChange: onDropdownVisibleChange
    })), _jsx("label", {
      className: "label-auto-complete-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
export default LabelAutoComplete;