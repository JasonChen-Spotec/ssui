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
import * as React from 'react';
import omit from 'lodash/omit';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';
import Select from "antd/es/select";
import classNames from 'classnames';
import ArrowDownOutlined from "a-icons/es/ArrowDownOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import { stableStringify } from 'aa-utils';
import { isNil } from 'lodash';
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
      value: isUndefined(item.value) ? undefined : stableStringify(item.value)
    }), otherProps);
  });
};
/** 判断 options 的 value 中是否包含引用类型（对象或数组） */
export var isReferenceTypeOption = function isReferenceTypeOption(options) {
  return some(options, function (item) {
    if (!isUndefined(item.value)) {
      return isArray(item.value) || isObject(item.value);
    }
    if (item.options) {
      return some(item.options, function (i) {
        return isArray(i.value) || isObject(i.value);
      });
    }
    return false;
  });
};
var ComplexValSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = __read(useControllableValue(props), 2),
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
  var isReferenceTypeVal = isReferenceTypeOption(options);
  var finalOptions = isReferenceTypeVal ? _formatOptions(options) : options;
  // 处理选中值改变：将底层传出的字符串安全地 parse 回真实的数据结构
  var handleChange = function handleChange(val, option) {
    var nextVal = val;
    if (!isNil(val) && isReferenceTypeVal) {
      nextVal = isMultiple && isArray(val) ? val.map(function (item) {
        return safeParse(item);
      }) : safeParse(val);
    }
    setValue(nextVal, option);
  };
  var handleSelect = function handleSelect(val, option) {
    var nextVal = !isNil(val) && isReferenceTypeVal ? safeParse(val) : val;
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextVal, option);
  };
  // 处理回显展示值：将传入的真实数据结构 stringify 成字符串去匹配底层 Option
  var displayValue = React.useMemo(function () {
    if (!isNil(value) && isReferenceTypeVal) {
      return isMultiple && isArray(value) ? value.map(function (v) {
        // 在 tags 模式下，如果 v 已经是手敲的基础字符串，直接放行，避免产生多余的双引号
        if (mode === 'tags' && typeof v === 'string') return v;
        return stableStringify(v);
      }) : stableStringify(value);
    }
    return value;
  }, [value, isReferenceTypeVal, isMultiple, mode]);
  return /*#__PURE__*/React.createElement(Select, __assign({
    ref: selectRef,
    className: classNames('complex-val-select', props === null || props === void 0 ? void 0 : props.className),
    suffixIcon: /*#__PURE__*/React.createElement(ArrowDownOutlined, null),
    value: displayValue,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, omit(props, ['value', 'defaultValue', 'onChange', 'options', 'onSelect', 'className'])));
});
export default ComplexValSelect;
var Option = Select.Option;
export { Option };
export { stableStringify } from 'aa-utils';