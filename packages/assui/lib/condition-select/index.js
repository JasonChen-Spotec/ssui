"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var ArrowDownOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/ArrowDownOutlined"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var col_1 = tslib_1.__importDefault(require("antd/lib/grid/col"));
var row_1 = tslib_1.__importDefault(require("antd/lib/grid/row"));
var select_1 = tslib_1.__importDefault(require("antd/lib/select"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isNil_1 = tslib_1.__importDefault(require("lodash/isNil"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var ConditionSelect = function ConditionSelect(_ref) {
  var option = _ref.option,
    value = _ref.value,
    onChange = _ref.onChange,
    selectProps = _ref.selectProps,
    selectName = _ref.selectName;
  var _ref2 = (0, useControllableValue_1["default"])({
      value: value,
      onChange: onChange
    }),
    componentValue = _ref2[0],
    setComponentValue = _ref2[1];
  var current = react_1["default"].useMemo(function () {
    if ((0, isNil_1["default"])(componentValue) || (0, isNil_1["default"])(componentValue[selectName]) || !option || option.length === 0) {
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
  var componentProps = (0, omit_1["default"])(current == null ? void 0 : current.componentProps, 'parseValue');
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
  return (0, jsx_runtime_1.jsxs)(row_1["default"], {
    gutter: 10,
    children: [(0, jsx_runtime_1.jsx)(col_1["default"], {
      span: firstSpan,
      children: (0, jsx_runtime_1.jsx)(select_1["default"], _extends({
        onChange: handleTypeChange,
        value: componentValue == null ? void 0 : componentValue[selectName],
        allowClear: true,
        className: (0, classnames_1["default"])('condition-select', selectProps == null ? void 0 : selectProps.className),
        suffixIcon: (0, jsx_runtime_1.jsx)(ArrowDownOutlined_1["default"], {})
      }, selectProps, {
        children: option.map(function (item) {
          return (0, jsx_runtime_1.jsx)(select_1["default"].Option, {
            value: item.value,
            children: item.label
          }, item.value);
        })
      }))
    }), DynamicComponent && (0, jsx_runtime_1.jsx)(col_1["default"], {
      span: 14,
      children: react_1["default"].createElement(DynamicComponent, _extends({}, componentProps, {
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
exports["default"] = ConditionSelect;