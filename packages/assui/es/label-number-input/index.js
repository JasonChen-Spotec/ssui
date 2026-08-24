function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import MultiLineEllipsisText from '../multi-line-ellipsis-text';
import NumberInput from '../number-input';
var LabelNumberInput = function LabelNumberInput(props) {
  var className = props.className,
    label = props.label,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    labelEllipsis = props.labelEllipsis,
    id = props.id,
    _props$baseMinWidth = props.baseMinWidth,
    baseMinWidth = _props$baseMinWidth === void 0 ? 50 : _props$baseMinWidth;
  var numberInputRef = React.useRef(null);
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var _React$useState = React.useState(false),
    focused = _React$useState[0],
    setFocused = _React$useState[1];
  var handleLabelClick = function handleLabelClick() {
    setFocused(true);
    numberInputRef.current.focus();
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  return _jsx("div", {
    className: classNames('label-number-input-warper', className),
    id: id,
    style: {
      minWidth: baseMinWidth
    },
    children: _jsxs("div", {
      className: classNames('label-number-input-field', {
        'label-number-input-focused': focused,
        'label-number-input-disabled': props.disabled
      }),
      children: [_jsx(NumberInput, _extends({}, omit(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder', 'baseMinWidth', 'labelEllipsis']), {
        ref: numberInputRef,
        "data-value": !isUndefined(value) ? ("" + value).length : 0,
        value: value,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: "label-number-input",
        onChange: function onChange(inputValue) {
          return setValue(inputValue);
        }
      })), labelEllipsis ? _jsx(MultiLineEllipsisText, {
        text: label,
        lines: 1,
        tipType: "tooltip",
        className: "label-number-input-ellipsis",
        onClick: handleLabelClick
      }) :
      // biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label
      _jsx("label", {
        className: "label-number-input-text",
        onClick: handleLabelClick,
        children: label
      })]
    })
  });
};
export default LabelNumberInput;