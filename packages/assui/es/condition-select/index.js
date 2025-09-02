var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
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
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import { useControllableValue } from 'ahooks';
import { Col, Row, Select } from 'antd';
import { omit } from 'lodash';
import React, { useState } from 'react';
var ConditionSelect = function ConditionSelect(_a) {
  var option = _a.option,
    value = _a.value,
    onChange = _a.onChange,
    id = _a.id,
    selectProps = _a.selectProps;
  var _b = __read(
      useControllableValue({
        value: value,
        onChange: onChange,
      }),
      2,
    ),
    setComponentValue = _b[1];
  var _c = __read(useState(option[0]), 2),
    current = _c[0],
    setCurrent = _c[1];
  var DynamicComponent =
    current === null || current === void 0 ? void 0 : current.component;
  var componentProps = omit(
    current === null || current === void 0 ? void 0 : current.componentProps,
    'parseValue',
  );
  var fieldProps =
    current === null || current === void 0 ? void 0 : current.componentProps;
  var handleTypeChange = function handleTypeChange(val) {
    var _a;
    setCurrent(
      option.find(function (item) {
        return item.value === val;
      }),
    );
    setComponentValue(((_a = {}), (_a[id] = val), _a));
  };
  var handleInputChange = function handleInputChange(v) {
    var _a;
    setComponentValue(
      ((_a = {}),
      (_a[id] = current === null || current === void 0 ? void 0 : current.value),
      (_a[
        componentProps === null || componentProps === void 0
          ? void 0
          : componentProps.name
      ] = v),
      _a),
    );
  };
  var firstSpan = DynamicComponent ? 10 : 24;
  return /*#__PURE__*/ React.createElement(
    Row,
    {
      gutter: 10,
    },
    /*#__PURE__*/ React.createElement(
      Col,
      {
        span: firstSpan,
      },
      /*#__PURE__*/ React.createElement(
        Select,
        __assign(
          {
            onChange: handleTypeChange,
            value: current === null || current === void 0 ? void 0 : current.value,
            allowClear: true,
          },
          selectProps,
        ),
        option.map(function (item) {
          return /*#__PURE__*/ React.createElement(
            Select.Option,
            {
              key: item.value,
              value: item.value,
            },
            item.label,
          );
        }),
      ),
    ),
    DynamicComponent &&
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: 14,
        },
        /*#__PURE__*/ React.createElement(
          DynamicComponent,
          __assign(__assign({}, componentProps), {
            onChange: function onChange(v) {
              var parseValue =
                fieldProps === null || fieldProps === void 0
                  ? void 0
                  : fieldProps.parseValue;
              if (parseValue) {
                var parseValueResult = parseValue(v);
                handleInputChange(parseValueResult);
                return;
              }
              handleInputChange(v);
            },
          }),
        ),
      ),
  );
};
export default ConditionSelect;
