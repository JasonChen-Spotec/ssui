"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var EyeFilled_1 = tslib_1.__importDefault(require("a-icons/lib/EyeFilled"));
var EyeOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/EyeOutlined"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var useSize_1 = tslib_1.__importDefault(require("ahooks/lib/useSize"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var trimStart_1 = tslib_1.__importDefault(require("lodash/trimStart"));
var PasswordSuffix = react_1["default"].memo(function (_ref) {
  var inputType = _ref.inputType,
    onChangeInputType = _ref.onChangeInputType;
  var resultNode = inputType === 'password' ? (0, jsx_runtime_1.jsx)(EyeOutlined_1["default"], {
    onClick: function onClick() {
      onChangeInputType('text');
    }
  }) : (0, jsx_runtime_1.jsx)(EyeFilled_1["default"], {
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
  var labelDomRef = react_1["default"].useRef(null);
  var labelSize = (0, useSize_1["default"])(labelDomRef);
  var _react_1$default$useS = react_1["default"].useState(false),
    focused = _react_1$default$useS[0],
    setFocused = _react_1$default$useS[1];
  var _ref2 = (0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }),
    value = _ref2[0],
    setValue = _ref2[1];
  var _react_1$default$useS2 = react_1["default"].useState(type),
    inputType = _react_1$default$useS2[0],
    setInputType = _react_1$default$useS2[1];
  var InputDomRef = react_1["default"].useRef(null);
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
    var finallyValue = (0, trimStart_1["default"])(e.target.value);
    setValue(finallyValue);
  };
  var handleLabelClick = function handleLabelClick() {
    InputDomRef.current.focus();
  };
  var onChangeInputType = react_1["default"].useCallback(function (nextInputType) {
    setInputType(nextInputType);
  }, []);
  var controlMinWidth = labelSize != null && labelSize.width ? labelSize.width + baseMinWidth : undefined;
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('label-input-control', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    },
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: (0, classnames_1["default"])('label-input-field', {
        'label-input-affix': prefix || suffix || isPasswordInput,
        'label-input-focused': focused,
        'label-input-disabled': disabled
      }),
      children: [prefix && (0, jsx_runtime_1.jsx)("div", {
        className: "label-input-prefix",
        children: prefix
      }), (0, jsx_runtime_1.jsxs)("div", {
        className: "label-input-warper",
        children: [(0, jsx_runtime_1.jsx)("input", {
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
        }), (0, jsx_runtime_1.jsx)("label", {
          className: "label-input-text",
          onClick: handleLabelClick,
          ref: labelDomRef,
          children: label
        })]
      }), (suffix || isPasswordInput) && (0, jsx_runtime_1.jsx)("div", {
        className: "label-input-suffix",
        children: suffix || (0, jsx_runtime_1.jsx)(PasswordSuffix, {
          inputType: inputType,
          onChangeInputType: onChangeInputType
        })
      })]
    })
  });
};
exports["default"] = LabelInput;