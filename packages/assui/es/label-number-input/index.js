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
import useSize from "ahooks/es/useSize";
import isUndefined from 'lodash/isUndefined';
import classNames from 'classnames';
import omit from 'lodash/omit';
import NumberInput from '../number-input';
var LabelNumberInput = function LabelNumberInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    id = props.id,
    _a = props.baseMinWidth,
    baseMinWidth = _a === void 0 ? 50 : _a;
  var numberInputRef = React.useRef(null);
  var labelDomRef = React.useRef(null);
  var labelSize = useSize(labelDomRef);
  var _b = __read(useControllableValue(props), 2),
    value = _b[0],
    setValue = _b[1];
  var _c = __read(React.useState(false), 2),
    focused = _c[0],
    setFocused = _c[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    numberInputRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
  };
  var controlMinWidth = (labelSize === null || labelSize === void 0 ? void 0 : labelSize.width) ? labelSize.width + baseMinWidth : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('label-number-input-warper', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('label-number-input-field', {
      'label-number-input-focused': focused,
      'label-number-input-disabled': props.disabled
    })
  }, /*#__PURE__*/React.createElement(NumberInput, __assign({}, omit(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth']), {
    ref: numberInputRef,
    "data-value": !isUndefined(value) ? "".concat(value).length : 0,
    value: value,
    onBlur: handleBlur,
    onFocus: handleFocus,
    className: "label-number-input",
    onChange: function onChange(inputValue) {
      return setValue(inputValue);
    }
  })), /*#__PURE__*/React.createElement("label", {
    className: "label-number-input-text",
    onClick: handleLabelClick
  }, label)));
};
export default LabelNumberInput;