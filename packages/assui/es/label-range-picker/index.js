var _excluded = ["className", "label", "showTime"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import CalendarOutlined from "a-icons/es/CalendarOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import DatePicker from "antd/es/date-picker";
import classNames from 'classnames';
import omit from 'lodash/omit';
var RangePicker = DatePicker.RangePicker;
var LabelDatePicker = function LabelDatePicker(props) {
  var className = props.className,
    label = props.label,
    showTime = props.showTime,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var datePickerRef = React.useRef(null);
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }),
    open = _useControllableValue[0],
    onOpenChange = _useControllableValue[1];
  var _useControllableValue2 = useControllableValue(props),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    var _datePickerRef$curren;
    if (!open) {
      onOpenChange(!open);
    }
    (_datePickerRef$curren = datePickerRef.current) == null || _datePickerRef$curren.focus();
  };
  var handleOpenChange = function handleOpenChange(nextOpen) {
    onOpenChange(nextOpen);
  };
  return _jsxs("div", {
    className: classNames({
      'label-range-picker': true,
      'label-range-picker-disabled': props.disabled,
      'label-range-picker-label-scale': open || value
    }, className),
    children: [_jsx(RangePicker, _extends({
      format: showTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD',
      allowEmpty: [true, true],
      showTime: showTime
    }, omit(restProps, 'onOpenChange'), {
      separator: "\u2013",
      open: open,
      onChange: handleChange,
      ref: datePickerRef,
      onOpenChange: handleOpenChange,
      suffixIcon: _jsx(CalendarOutlined, {})
    })), _jsx("label", {
      className: "label-range-picker-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
export default LabelDatePicker;