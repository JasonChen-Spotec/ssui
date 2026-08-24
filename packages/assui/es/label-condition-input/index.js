function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import useSize from "ahooks/es/useSize";
import classNames from 'classnames';
import omit from 'lodash/omit';
import ConditionInput from '../condition-input';
var LabelConditionInput = function LabelConditionInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    id = props.id,
    onFocus = props.onFocus,
    _props$baseMinWidth = props.baseMinWidth,
    baseMinWidth = _props$baseMinWidth === void 0 ? 50 : _props$baseMinWidth;
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var labelDomRef = React.useRef(null);
  var labelSize = useSize(labelDomRef);
  var InputDomRef = React.useRef(null);
  var _React$useState = React.useState(false),
    focused = _React$useState[0],
    setFocused = _React$useState[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    InputDomRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  var controlMinWidth = labelSize != null && labelSize.width ? labelSize.width + baseMinWidth : undefined;
  return _jsx("div", {
    className: classNames('label-condition-input-warper', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    },
    children: _jsxs("div", {
      className: classNames('label-condition-input-field', {
        'label-condition-input-focused': focused
      }),
      children: [_jsx(ConditionInput, _extends({}, omit(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth']), {
        ref: InputDomRef,
        "data-value": value ? value.length : 0,
        value: value,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: "label-condition-input",
        onChange: function onChange(inputValue) {
          return setValue(inputValue);
        }
      })), _jsx("label", {
        ref: labelDomRef,
        className: "label-condition-input-text",
        onClick: handleLabelClick,
        children: label
      })]
    })
  });
};
export default LabelConditionInput;