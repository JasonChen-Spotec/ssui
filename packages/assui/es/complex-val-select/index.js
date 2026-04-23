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
import find from 'lodash/find';
import some from 'lodash/some';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import Select from "antd/es/select";
import classNames from 'classnames';
import ArrowDownOutlined from "a-icons/es/ArrowDownOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
var Option = Select.Option;
export { Option };
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
export var isReferenceTypeOption = function isReferenceTypeOption(options) {
  var resultBoolean = some(options, function (item) {
    if (item.value) {
      return isArray(item.value) || isObject(item.value);
    }
    if (item.options) {
      return some(item.options, function (i) {
        return isArray(i.value) || isObject(i.value);
      });
    }
    return false;
  });
  return resultBoolean;
};
var ComplexValSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = __read(useControllableValue(props), 2),
    value = _a[0],
    setValue = _a[1];
  var options = props.options,
    onSelect = props.onSelect;
  var selectRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return selectRef.current;
  });
  // 判断是否需要将optionValue转为JSON字符串
  var isReferenceTypeVal = isReferenceTypeOption(options);
  var finalOptions = isReferenceTypeVal ? _formatOptions(options) : options;
  var handleChange = function handleChange(val) {
    var nextVal = val && isReferenceTypeVal ? JSON.parse(val) : val;
    setValue(nextVal, options);
  };
  var handleSelect = function handleSelect(val) {
    var nextVal = val && isReferenceTypeVal ? JSON.parse(val) : val;
    var selectOption = find(finalOptions, {
      value: val
    });
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextVal, selectOption);
  };
  return /*#__PURE__*/React.createElement(Select, __assign({
    ref: selectRef,
    className: classNames('complex-val-select', props === null || props === void 0 ? void 0 : props.className),
    suffixIcon: /*#__PURE__*/React.createElement(ArrowDownOutlined, null),
    value: value && isReferenceTypeVal ? JSON.stringify(value) : value,
    options: finalOptions,
    onChange: handleChange,
    onSelect: handleSelect
  }, omit(props, ['value', 'onChange', 'options', 'onSelect', 'className'])));
});
export default ComplexValSelect;