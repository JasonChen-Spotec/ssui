var _excluded = ["className", "label", "id", "formatter", "onFocus", "onBlur"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
var LabelTextArea = function LabelTextArea(props) {
  var className = props.className,
    label = props.label,
    id = props.id,
    formatter = props.formatter,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _React$useState = React.useState(false),
    focused = _React$useState[0],
    setFocused = _React$useState[1];
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var TextAreaDomRef = React.useRef(null);
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  var handleLabelClick = function handleLabelClick() {
    TextAreaDomRef.current.focus();
  };
  var handleChange = function handleChange(e) {
    var finallyValue = trimStart(e.target.value);
    if (formatter) {
      finallyValue = formatter(finallyValue);
    }
    setValue(finallyValue);
  };
  return _jsx("div", {
    className: classNames('label-input-control', className),
    id: id,
    children: _jsxs("div", {
      className: classNames('label-textarea-warper', {
        'textarea-warper-focused': focused
      }),
      onClick: handleLabelClick,
      children: [_jsx("textarea", _extends({}, restProps, {
        ref: function ref(el) {
          return TextAreaDomRef.current = el;
        },
        "data-value": value ? value.length : 0,
        className: "label-textarea",
        value: value,
        onFocus: handleFocus,
        onChange: handleChange,
        onBlur: handleBlur
      })), _jsx("label", {
        className: "label-textarea-text",
        children: label
      })]
    })
  });
};
export default LabelTextArea;