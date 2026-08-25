function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import CalendarOutlined from "a-icons/es/CalendarOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import { DatePicker } from 'antd';
import classNames from 'classnames';
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime;
  var datePickerRef = React.useRef(null);
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
    if (!open) {
      setOpen(!open);
    }
    datePickerRef.current.focus();
  };
  var onBlur = function onBlur() {
    setOpen(false);
  };
  var onOpenChange = function onOpenChange(nextOpen) {
    setOpen(nextOpen);
  };
  return _jsxs("div", {
    className: classNames({
      'label-date-picker': true,
      'label-date-picker-label-scale': open || value
    }, className),
    children: [_jsx(DatePicker, _extends({
      format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
    }, props, {
      open: open,
      onChange: handleChange,
      ref: datePickerRef,
      onOpenChange: onOpenChange,
      onBlur: onBlur,
      placeholder: "",
      suffixIcon: _jsx(CalendarOutlined, {})
    })), _jsx("label", {
      className: "label-date-picker-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
export default LabelDatePicker;