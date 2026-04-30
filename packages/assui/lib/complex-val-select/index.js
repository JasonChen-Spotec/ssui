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
exports.stableStringify = exports.Option = exports.isReferenceTypeOption = void 0;
var React = __importStar(require("react"));
var omit_1 = __importDefault(require("lodash/omit"));
var some_1 = __importDefault(require("lodash/some"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var isObject_1 = __importDefault(require("lodash/isObject"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var select_1 = __importDefault(require("antd/lib/select"));
var classnames_1 = __importDefault(require("classnames"));
var ArrowDownOutlined_1 = __importDefault(require("a-icons/lib/ArrowDownOutlined"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var aa_utils_1 = require("aa-utils");
var lodash_1 = require("lodash");
// 核心防御：防止非标准 JSON 字符串（如 tags 模式下手敲的纯文本或 undefined）导致页面崩溃
var safeParse = function safeParse(str) {
  if (typeof str !== 'string') return str;
  try {
    return JSON.parse(str);
  } catch (_a) {
    return str; // 解析失败直接返回原字符串
  }
};
/** 递归格式化 options，将复杂 value 序列化为字符串 */
var _formatOptions = function formatOptions(dataSource) {
  if (!dataSource) return dataSource;
  return dataSource.map(function (item) {
    var otherProps = item.options ? {
      options: _formatOptions(item.options)
    } : {};
    return __assign(__assign(__assign({}, item), {
      label: item.label,
      value: (0, isUndefined_1["default"])(item.value) ? undefined : (0, aa_utils_1.stableStringify)(item.value)
    }), otherProps);
  });
};
/** 判断 options 的 value 中是否包含引用类型（对象或数组） */
var isReferenceTypeOption = function isReferenceTypeOption(options) {
  return (0, some_1["default"])(options, function (item) {
    if (!(0, isUndefined_1["default"])(item.value)) {
      return (0, isArray_1["default"])(item.value) || (0, isObject_1["default"])(item.value);
    }
    if (item.options) {
      return (0, some_1["default"])(item.options, function (i) {
        return (0, isArray_1["default"])(i.value) || (0, isObject_1["default"])(i.value);
      });
    }
    return false;
  });
};
exports.isReferenceTypeOption = isReferenceTypeOption;
var ComplexValSelect = React.forwardRef(function (props, ref) {
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    setValue = _a[1];
  var options = props.options,
    onSelect = props.onSelect,
    mode = props.mode;
  var selectRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return selectRef.current;
  });
  // 判断是否为多选模式 (multiple 或 tags)
  var isMultiple = mode === 'multiple' || mode === 'tags';
  // 判断是否需要将 option 的 value 转为 JSON 字符串
  var isReferenceTypeVal = (0, exports.isReferenceTypeOption)(options);
  var finalOptions = isReferenceTypeVal ? _formatOptions(options) : options;
  // 处理选中值改变：将底层传出的字符串安全地 parse 回真实的数据结构
  var handleChange = function handleChange(val, option) {
    var nextVal = val;
    if (!(0, lodash_1.isNil)(val) && isReferenceTypeVal) {
      nextVal = isMultiple && (0, isArray_1["default"])(val) ? val.map(function (item) {
        return safeParse(item);
      }) : safeParse(val);
    }
    setValue(nextVal, option);
  };
  var handleSelect = function handleSelect(val, option) {
    var nextVal = !(0, lodash_1.isNil)(val) && isReferenceTypeVal ? safeParse(val) : val;
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextVal, option);
  };
  // 处理回显展示值：将传入的真实数据结构 stringify 成字符串去匹配底层 Option
  var displayValue = React.useMemo(function () {
    if (!(0, lodash_1.isNil)(value) && isReferenceTypeVal) {
      return isMultiple && (0, isArray_1["default"])(value) ? value.map(function (v) {
        // 在 tags 模式下，如果 v 已经是手敲的基础字符串，直接放行，避免产生多余的双引号
        if (mode === 'tags' && typeof v === 'string') return v;
        return (0, aa_utils_1.stableStringify)(v);
      }) : (0, aa_utils_1.stableStringify)(value);
    }
    return value;
  }, [value, isReferenceTypeVal, isMultiple, mode]);
  return React.createElement(select_1["default"], __assign({
    ref: selectRef,
    className: (0, classnames_1["default"])('complex-val-select', props === null || props === void 0 ? void 0 : props.className),
    suffixIcon: React.createElement(ArrowDownOutlined_1["default"], null),
    value: displayValue,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, (0, omit_1["default"])(props, ['value', 'defaultValue', 'onChange', 'options', 'onSelect', 'className'])));
});
exports["default"] = ComplexValSelect;
var Option = select_1["default"].Option;
exports.Option = Option;
var aa_utils_2 = require("aa-utils");
Object.defineProperty(exports, "stableStringify", {
  enumerable: true,
  get: function get() {
    return aa_utils_2.stableStringify;
  }
});