import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import EyeFilled from "a-icons/es/EyeFilled";
import EyeOutlined from "a-icons/es/EyeOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import useSize from "ahooks/es/useSize";
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
var PasswordSuffix = /*#__PURE__*/React.memo(function (_ref) {
  var inputType = _ref.inputType,
    onChangeInputType = _ref.onChangeInputType;
  var resultNode = inputType === 'password' ? _jsx(EyeOutlined, {
    onClick: function onClick() {
      onChangeInputType('text');
    }
  }) : _jsx(EyeFilled, {
    className: "label-input-open-eye",
    onClick: function onClick() {
      onChangeInputType('password');
    }
  });
  return resultNode;
});
var LabelInput = function LabelInput(props) {
  var className = props.className,
    prefix = props.prefix,
    suffix = props.suffix,
    label = props.label,
    id = props.id,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    maxLength = props.maxLength,
    _props$baseMinWidth = props.baseMinWidth,
    baseMinWidth = _props$baseMinWidth === void 0 ? 50 : _props$baseMinWidth,
    disabled = props.disabled;
  var labelDomRef = React.useRef(null);
  var labelSize = useSize(labelDomRef);
  var _React$useState = React.useState(false),
    focused = _React$useState[0],
    setFocused = _React$useState[1];
  var _useControllableValue = useControllableValue(props, {
      defaultValue: ''
    }),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var _React$useState2 = React.useState(type),
    inputType = _React$useState2[0],
    setInputType = _React$useState2[1];
  var InputDomRef = React.useRef(null);
  var isPasswordInput = type === 'password';
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus == null || onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur == null || onBlur(value);
  };
  var handleChange = function handleChange(e) {
    var finallyValue = trimStart(e.target.value);
    setValue(finallyValue);
  };
  var handleLabelClick = function handleLabelClick() {
    InputDomRef.current.focus();
  };
  var onChangeInputType = React.useCallback(function (nextInputType) {
    setInputType(nextInputType);
  }, []);
  var controlMinWidth = labelSize != null && labelSize.width ? labelSize.width + baseMinWidth : undefined;
  return _jsx("div", {
    className: classNames('label-input-control', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    },
    children: _jsxs("div", {
      className: classNames('label-input-field', {
        'label-input-affix': prefix || suffix || isPasswordInput,
        'label-input-focused': focused,
        'label-input-disabled': disabled
      }),
      children: [prefix && _jsx("div", {
        className: "label-input-prefix",
        children: prefix
      }), _jsxs("div", {
        className: "label-input-warper",
        children: [_jsx("input", {
          ref: function ref(el) {
            return InputDomRef.current = el;
          },
          "data-value": value ? value.length : 0,
          className: "label-input",
          type: inputType,
          value: value || '',
          onFocus: handleFocus,
          onBlur: handleBlur,
          onChange: handleChange,
          maxLength: maxLength,
          disabled: disabled
        }), _jsx("label", {
          className: "label-input-text",
          onClick: handleLabelClick,
          ref: labelDomRef,
          children: label
        })]
      }), (suffix || isPasswordInput) && _jsx("div", {
        className: "label-input-suffix",
        children: suffix || _jsx(PasswordSuffix, {
          inputType: inputType,
          onChangeInputType: onChangeInputType
        })
      })]
    })
  });
};
export default LabelInput;