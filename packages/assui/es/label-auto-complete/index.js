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
    var finallyValue = trimStart(nextValue);
    setValue(finallyValue);
    onChange && onChange(finallyValue, options || []);
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
    onBlur && onBlur(event);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames({
      'label-auto-complete': true,
      'label-auto-complete-label-scale': open || value
    }, className)
  }, /*#__PURE__*/React.createElement(AutoComplete, __assign({}, omit(props, ['open', 'onChange', 'className', 'label']), {
    open: open,
    ref: autoComplete,
    value: value,
    onBlur: handleBlur,
    size: "large",
    className: "label-auto-complete-selector",
    onChange: handleChange,
    onDropdownVisibleChange: onDropdownVisibleChange
  })), /*#__PURE__*/React.createElement("label", {
    className: "label-auto-complete-text",
    onClick: handleLabelClick
  }, label));
};
export default LabelAutoComplete;