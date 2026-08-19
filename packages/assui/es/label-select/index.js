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
import Select from 'antd/lib/select';
import isArray from 'lodash/isArray';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import classNames from 'classnames';
import omit from 'lodash/omit';
import ComplexValSelect from '../complex-val-select';
export var Option = Select.Option;
var LabelSelect = function LabelSelect(props, ref) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur;
  var selectRef = React.useRef(null);
  var _a = __read(useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'setOpen'
    }), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = __read(useControllableValue(props), 2),
    value = _b[0],
    setValue = _b[1];
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
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames({
      'label-select': true,
      'label-select-label-scale': open || !isArray(value) && !isUndefined(value) && !isNull(value) || isArray(value) && value.length
    }, className)
  }, /*#__PURE__*/React.createElement(ComplexValSelect, __assign({
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
      var _a;
      (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    onDropdownVisibleChange: onDropdownVisibleChange
  })), /*#__PURE__*/React.createElement("label", {
    className: "label-select-text",
    onClick: handleLabelClick
  }, label));
};
var ForwardRefLabelSelect = /*#__PURE__*/React.forwardRef(LabelSelect);
export default ForwardRefLabelSelect;