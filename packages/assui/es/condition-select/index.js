function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useControllableValue from "ahooks/es/useControllableValue";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Select from "antd/es/select";
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import React from 'react';
import classNames from 'classnames';
import ArrowDownOutlined from "a-icons/es/ArrowDownOutlined";
var ConditionSelect = function ConditionSelect(_ref) {
  var option = _ref.option,
    value = _ref.value,
    onChange = _ref.onChange,
    selectProps = _ref.selectProps,
    selectName = _ref.selectName;
  var _useControllableValue = useControllableValue({
      value: value,
      onChange: onChange
    }),
    componentValue = _useControllableValue[0],
    setComponentValue = _useControllableValue[1];
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
  var DynamicComponent = current == null ? void 0 : current.component;
  var componentProps = omit(current == null ? void 0 : current.componentProps, 'parseValue');
  var fieldProps = current == null ? void 0 : current.componentProps;
  var handleTypeChange = function handleTypeChange(val) {
    var _setComponentValue;
    setComponentValue((_setComponentValue = {}, _setComponentValue[selectName] = val, _setComponentValue));
  };
  var handleInputChange = function handleInputChange(v) {
    var _extends2;
    setComponentValue(_extends({}, componentValue, (_extends2 = {}, _extends2[componentProps.name] = v, _extends2)));
  };
  var firstSpan = DynamicComponent ? 10 : 24;
  return _jsxs(Row, {
    gutter: 10,
    children: [_jsx(Col, {
      span: firstSpan,
      children: _jsx(Select, _extends({
        onChange: handleTypeChange,
        value: componentValue == null ? void 0 : componentValue[selectName],
        allowClear: true,
        className: classNames('condition-select', selectProps == null ? void 0 : selectProps.className),
        suffixIcon: _jsx(ArrowDownOutlined, {})
      }, selectProps, {
        children: option.map(function (item) {
          return _jsx(Select.Option, {
            value: item.value,
            children: item.label
          }, item.value);
        })
      }))
    }), DynamicComponent && _jsx(Col, {
      span: 14,
      children: /*#__PURE__*/React.createElement(DynamicComponent, _extends({}, componentProps, {
        value: componentValue[componentProps.name],
        onChange: function onChange(v) {
          var parseValue = fieldProps == null ? void 0 : fieldProps.parseValue;
          if (parseValue) {
            var parseValueResult = parseValue(v);
            handleInputChange(parseValueResult);
            return;
          }
          handleInputChange(v);
        }
      }))
    })]
  });
};
export default ConditionSelect;