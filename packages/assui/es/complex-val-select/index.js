function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ArrowDownOutlined from "a-icons/es/ArrowDownOutlined";
import stableStringify from "aa-utils/es/stableStringify";
import useControllableValue from "ahooks/es/useControllableValue";
import Select from "antd/es/select";
import classNames from 'classnames';
import { isNil } from 'lodash';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import some from 'lodash/some';
export var Option = Select.Option;
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
      value: isUndefined(item.value) ? undefined : stableStringify(item.value)
    }, otherProps);
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
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
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
    onSelect == null || onSelect(nextVal, option);
  };
  // 处理回显展示值：将传入的真实数据结构 stringify 成字符串去匹配底层 Option
  var displayValue = React.useMemo(function () {
    if (!isNil(value) && isReferenceTypeVal) {
      return isMultiple && isArray(value) ? value.map(function (v) {
        // 在 tags 模式下，如果 v 已经是手敲的基础字符串，直接放行，避免产生多余的双引号
        if (mode === 'tags' && typeof v === 'string') {
          return v;
        }
        return stableStringify(v);
      }) : stableStringify(value);
    }
    return value;
  }, [value, isReferenceTypeVal, isMultiple, mode]);
  return _jsx(Select, _extends({
    ref: selectRef,
    className: classNames('complex-val-select', props == null ? void 0 : props.className),
    suffixIcon: _jsx(ArrowDownOutlined, {}),
    value: displayValue,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, omit(props, ['value', 'defaultValue', 'onChange', 'options', 'onSelect', 'className'])));
});
export default ComplexValSelect;