"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var trimStart_1 = __importDefault(require("lodash/trimStart"));
var EyeFilled_1 = __importDefault(require("a-icons/lib/EyeFilled"));
var EyeOutlined_1 = __importDefault(require("a-icons/lib/EyeOutlined"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var useSize_1 = __importDefault(require("ahooks/lib/useSize"));
var PasswordSuffix = react_1["default"].memo(function (_a) {
  var inputType = _a.inputType,
    onChangeInputType = _a.onChangeInputType;
  var resultNode = inputType === 'password' ? react_1["default"].createElement(EyeOutlined_1["default"], {
    onClick: function onClick() {
      onChangeInputType('text');
    }
  }) : react_1["default"].createElement(EyeFilled_1["default"], {
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
  var labelDomRef = react_1["default"].useRef(null);
  var labelSize = (0, useSize_1["default"])(labelDomRef);
  var _c = __read(react_1["default"].useState(false), 2),
    focused = _c[0],
    setFocused = _c[1];
  var _d = __read((0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }), 2),
    value = _d[0],
    setValue = _d[1];
  var _e = __read(react_1["default"].useState(type), 2),
    inputType = _e[0],
    setInputType = _e[1];
  var InputDomRef = react_1["default"].useRef(null);
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
    var finallyValue = (0, trimStart_1["default"])(e.target.value);
    setValue(finallyValue);
  };
  var handleLabelClick = function handleLabelClick() {
    InputDomRef.current.focus();
  };
  var onChangeInputType = react_1["default"].useCallback(function (nextInputType) {
    setInputType(nextInputType);
  }, []);
  var controlMinWidth = (labelSize === null || labelSize === void 0 ? void 0 : labelSize.width) ? labelSize.width + baseMinWidth : undefined;
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-input-control', className),
    id: id,
    style: {
      minWidth: controlMinWidth
    }
  }, react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('label-input-field', {
      'label-input-affix': prefix || suffix || isPasswordInput,
      'label-input-focused': focused,
      'label-input-disabled': disabled
    })
  }, prefix && react_1["default"].createElement("div", {
    className: "label-input-prefix"
  }, prefix), react_1["default"].createElement("div", {
    className: "label-input-warper"
  }, react_1["default"].createElement("input", {
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
  }), react_1["default"].createElement("label", {
    className: "label-input-text",
    onClick: handleLabelClick,
    ref: labelDomRef
  }, label)), (suffix || isPasswordInput) && react_1["default"].createElement("div", {
    className: "label-input-suffix"
  }, suffix || react_1["default"].createElement(PasswordSuffix, {
    inputType: inputType,
    onChangeInputType: onChangeInputType
  }))));
};
exports["default"] = LabelInput;