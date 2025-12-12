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
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import EyeFilled from "a-icons/es/EyeFilled";
import EyeOutlined from "a-icons/es/EyeOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import useSize from "ahooks/es/useSize";
var PasswordSuffix = /*#__PURE__*/React.memo(function (_a) {
  var inputType = _a.inputType,
    onChangeInputType = _a.onChangeInputType;
  var resultNode = inputType === 'password' ? /*#__PURE__*/React.createElement(EyeOutlined, {
    onClick: function onClick() {
      onChangeInputType('text');
    }
  }) : /*#__PURE__*/React.createElement(EyeFilled, {
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
    _a = props.type,
    type = _a === void 0 ? 'text' : _a,
    maxLength = props.maxLength,
    _b = props.baseMinWidth,
    baseMinWidth = _b === void 0 ? 50 : _b,
    disabled = props.disabled;
  var labelDomRef = React.useRef(null);
  var labelSize = useSize(labelDomRef);
  var _c = __read(React.useState(false), 2),
    focused = _c[0],
    setFocused = _c[1];
  var _d = __read(useControllableValue(props, {
      defaultValue: ''
    }), 2),
    value = _d[0],
    setValue = _d[1];
  var _e = __read(React.useState(type), 2),
    inputType = _e[0],
    setInputType = _e[1];
  var InputDomRef = React.useRef(null);
  var isPasswordInput = type === 'password';
  var handleFocus = function handleFocus() {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(value);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
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
  var controlMinWidth = (labelSize === null || labelSize === void 0 ? void 0 : labelSize.width) ? labelSize.width + baseMinWidth : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('label-input-control', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('label-input-field', {
      'label-input-affix': prefix || suffix || isPasswordInput,
      'label-input-focused': focused,
      'label-input-disabled': disabled
    })
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: "label-input-prefix"
  }, prefix), /*#__PURE__*/React.createElement("div", {
    className: "label-input-warper"
  }, /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("label", {
    className: "label-input-text",
    onClick: handleLabelClick,
    ref: labelDomRef
  }, label)), (suffix || isPasswordInput) && /*#__PURE__*/React.createElement("div", {
    className: "label-input-suffix"
  }, suffix || /*#__PURE__*/React.createElement(PasswordSuffix, {
    inputType: inputType,
    onChangeInputType: onChangeInputType
  }))));
};
export default LabelInput;