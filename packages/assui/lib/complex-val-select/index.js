"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReferenceTypeOption = exports.Option = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var ArrowDownOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/ArrowDownOutlined"));
var stableStringify_1 = tslib_1.__importDefault(require("aa-utils/lib/stableStringify"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var select_1 = tslib_1.__importDefault(require("antd/lib/select"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var lodash_1 = require("lodash");
var isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
var isObject_1 = tslib_1.__importDefault(require("lodash/isObject"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var some_1 = tslib_1.__importDefault(require("lodash/some"));
exports.Option = select_1["default"].Option;
// 核心防御：防止非标准 JSON 字符串（如 tags 模式下手敲的纯文本或 undefined）导致页面崩溃
var safeParse = function safeParse(str) {
  if (typeof str !== 'string') {
    return str;
  }
  try {
    return JSON.parse(str);
  } catch (_unused) {
    return str; // 解析失败直接返回原字符串
  }
};
/** 递归格式化 options，将复杂 value 序列化为字符串 */
var _formatOptions = function formatOptions(dataSource) {
  if (!dataSource) {
    return dataSource;
  }
  return dataSource.map(function (item) {
    var otherProps = item.options ? {
      options: _formatOptions(item.options)
    } : {};
    return _extends({}, item, {
      label: item.label,
      value: (0, isUndefined_1["default"])(item.value) ? undefined : (0, stableStringify_1["default"])(item.value)
    }, otherProps);
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
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
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
    onSelect == null || onSelect(nextVal, option);
  };
  // 处理回显展示值：将传入的真实数据结构 stringify 成字符串去匹配底层 Option
  var displayValue = React.useMemo(function () {
    if (!(0, lodash_1.isNil)(value) && isReferenceTypeVal) {
      return isMultiple && (0, isArray_1["default"])(value) ? value.map(function (v) {
        // 在 tags 模式下，如果 v 已经是手敲的基础字符串，直接放行，避免产生多余的双引号
        if (mode === 'tags' && typeof v === 'string') {
          return v;
        }
        return (0, stableStringify_1["default"])(v);
      }) : (0, stableStringify_1["default"])(value);
    }
    return value;
  }, [value, isReferenceTypeVal, isMultiple, mode]);
  return (0, jsx_runtime_1.jsx)(select_1["default"], _extends({
    ref: selectRef,
    className: (0, classnames_1["default"])('complex-val-select', props == null ? void 0 : props.className),
    suffixIcon: (0, jsx_runtime_1.jsx)(ArrowDownOutlined_1["default"], {}),
    value: displayValue,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, (0, omit_1["default"])(props, ['value', 'defaultValue', 'onChange', 'options', 'onSelect', 'className'])));
});
exports["default"] = ComplexValSelect;