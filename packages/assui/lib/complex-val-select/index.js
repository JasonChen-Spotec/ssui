"use strict";

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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReferenceTypeOption = exports.Option = void 0;
var React = __importStar(require("react"));
var omit_1 = __importDefault(require("lodash/omit"));
var find_1 = __importDefault(require("lodash/find"));
var some_1 = __importDefault(require("lodash/some"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var isObject_1 = __importDefault(require("lodash/isObject"));
var select_1 = __importDefault(require("antd/lib/select"));
var classnames_1 = __importDefault(require("classnames"));
var ArrowDownOutlined_1 = __importDefault(require("a-icons/lib/ArrowDownOutlined"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var Option = select_1["default"].Option;
exports.Option = Option;
var _formatOptions = function formatOptions(dateSource) {
  if (dateSource) {
    var options = dateSource.map(function (item) {
      var otherProps = item.options ? {
        options: _formatOptions(item.options)
      } : {};
      return __assign(__assign(__assign({}, item), {
        label: item.label,
        value: item.value ? JSON.stringify(item.value) : undefined
      }), otherProps);
    });
    return options;
  }
  return dateSource;
};
/** 判断optionsValue是否是引用类型 */
var isReferenceTypeOption = function isReferenceTypeOption(options) {
  var resultBoolean = (0, some_1["default"])(options, function (item) {
    if (item.value) {
      return (0, isArray_1["default"])(item.value) || (0, isObject_1["default"])(item.value);
    }
    if (item.options) {
      return (0, some_1["default"])(item.options, function (i) {
        return (0, isArray_1["default"])(i.value) || (0, isObject_1["default"])(i.value);
      });
    }
    return false;
  });
  return resultBoolean;
};
exports.isReferenceTypeOption = isReferenceTypeOption;
var ComplexValSelect = React.forwardRef(function (props, ref) {
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    setValue = _a[1];
  var options = props.options,
    onSelect = props.onSelect;
  var selectRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return selectRef.current;
  });
  // 判断是否需要将optionValue转为JSON字符串
  var isReferenceTypeVal = (0, exports.isReferenceTypeOption)(options);
  var finalOptions = isReferenceTypeVal ? _formatOptions(options) : options;
  var handleChange = function handleChange(val) {
    var nextVal = val && isReferenceTypeVal ? JSON.parse(val) : val;
    setValue(nextVal, options);
  };
  var handleSelect = function handleSelect(val) {
    var nextVal = val && isReferenceTypeVal ? JSON.parse(val) : val;
    var selectOption = (0, find_1["default"])(finalOptions, {
      value: val
    });
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextVal, selectOption);
  };
  return React.createElement(select_1["default"], __assign({
    ref: selectRef,
    className: (0, classnames_1["default"])('complex-val-select', props === null || props === void 0 ? void 0 : props.className),
    suffixIcon: React.createElement(ArrowDownOutlined_1["default"], null),
    value: value && isReferenceTypeVal ? JSON.stringify(value) : value,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, (0, omit_1["default"])(props, ['value', 'onChange', 'options', 'onSelect', 'className'])));
});
exports["default"] = ComplexValSelect;