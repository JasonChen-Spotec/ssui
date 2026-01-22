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
import useControllableValue from "ahooks/es/useControllableValue";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Select from "antd/es/select";
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import React from 'react';
import classNames from 'classnames';
import ArrowDownOutlined from "a-icons/es/ArrowDownOutlined";
var ConditionSelect = function ConditionSelect(_a) {
  var option = _a.option,
    value = _a.value,
    onChange = _a.onChange,
    selectProps = _a.selectProps,
    selectName = _a.selectName;
  var _b = __read(useControllableValue({
      value: value,
      onChange: onChange
    }), 2),
    componentValue = _b[0],
    setComponentValue = _b[1];
  var current = React.useMemo(function () {
    if (isNil(componentValue) || isNil(componentValue[selectName]) || !option || option.length === 0) {
      return null;
    }
    var result = option.find(function (item) {
      return item.value === componentValue[selectName];
    });
    if (result) {
      return result;
    }
    return null;
  }, [componentValue, option]);
  var DynamicComponent = current === null || current === void 0 ? void 0 : current.component;
  var componentProps = omit(current === null || current === void 0 ? void 0 : current.componentProps, 'parseValue');
  var fieldProps = current === null || current === void 0 ? void 0 : current.componentProps;
  var handleTypeChange = function handleTypeChange(val) {
    var _a;
    setComponentValue((_a = {}, _a[selectName] = val, _a));
  };
  var handleInputChange = function handleInputChange(v) {
    var _a;
    setComponentValue(__assign(__assign({}, componentValue), (_a = {}, _a[componentProps.name] = v, _a)));
  };
  var firstSpan = DynamicComponent ? 10 : 24;
  return /*#__PURE__*/React.createElement(Row, {
    gutter: 10
  }, /*#__PURE__*/React.createElement(Col, {
    span: firstSpan
  }, /*#__PURE__*/React.createElement(Select, __assign({
    onChange: handleTypeChange,
    value: componentValue === null || componentValue === void 0 ? void 0 : componentValue[selectName],
    allowClear: true,
    className: classNames('condition-select', selectProps === null || selectProps === void 0 ? void 0 : selectProps.className),
    suffixIcon: /*#__PURE__*/React.createElement(ArrowDownOutlined, null)
  }, selectProps), option.map(function (item) {
    return /*#__PURE__*/React.createElement(Select.Option, {
      key: item.value,
      value: item.value
    }, item.label);
  }))), DynamicComponent && /*#__PURE__*/React.createElement(Col, {
    span: 14
  }, /*#__PURE__*/React.createElement(DynamicComponent, __assign(__assign({}, componentProps), {
    value: componentValue[componentProps.name],
    onChange: function onChange(v) {
      var parseValue = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.parseValue;
      if (parseValue) {
        var parseValueResult = parseValue(v);
        handleInputChange(parseValueResult);
        return;
      }
      handleInputChange(v);
    }
  }))));
};
export default ConditionSelect;