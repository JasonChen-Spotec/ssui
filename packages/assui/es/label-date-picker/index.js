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
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import { DatePicker } from 'antd';
import CalendarOutlined from "a-icons/es/CalendarOutlined";
import classNames from 'classnames';
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime;
  var datePickerRef = React.useRef(null);
  var _a = __read(useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = __read(useControllableValue(props), 2),
    value = _b[0],
    setValue = _b[1];
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
  return /*#__PURE__*/React.createElement("div", {
    className: classNames({
      'label-date-picker': true,
      'label-date-picker-label-scale': open || value
    }, className)
  }, /*#__PURE__*/React.createElement(DatePicker, __assign({
    format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
  }, props, {
    open: open,
    onChange: handleChange,
    ref: datePickerRef,
    onOpenChange: onOpenChange,
    onBlur: onBlur,
    placeholder: "",
    suffixIcon: /*#__PURE__*/React.createElement(CalendarOutlined, null)
  })), /*#__PURE__*/React.createElement("label", {
    className: "label-date-picker-text",
    onClick: handleLabelClick
  }, label));
};
export default LabelDatePicker;