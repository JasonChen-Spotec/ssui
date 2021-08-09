var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
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

import React, { useState } from 'react';
import Input from 'antd/lib/input';
import 'antd/lib/input/style';
import { INT } from './const/numberType';
import { filterInt, filterFloat } from './utils';

var NumberInput = function NumberInput(props) {
  var value = props.value,
      onChange = props.onChange,
      numberType = props.numberType,
      precision = props.precision,
      formatter = props.formatter,
      enableMinus = props.enableMinus,
      onBlur = props.onBlur,
      restProps = __rest(props, ["value", "onChange", "numberType", "precision", "formatter", "enableMinus", "onBlur"]);

  var _a = __read(useState(''), 2),
      number = _a[0],
      setNumber = _a[1];

  var resultValue = (value === 0 ? "" + value : value) || number;

  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;

    if (numberType === INT) {
      newNumber = filterInt({
        value: newValue,
        preValue: resultValue,
        enableMinus: enableMinus
      });
    } else {
      newNumber = filterFloat({
        value: newValue,
        preValue: resultValue,
        precision: precision,
        enableMinus: enableMinus
      });
    }

    if (formatter) {
      newNumber = formatter(newNumber);
    }

    if (resultValue !== newNumber) {
      if (onChange) {
        onChange(newNumber);
      } else {
        setNumber(newNumber);
      }
    }
  };

  var onNumberBlur = function onNumberBlur() {
    if (resultValue === '-' || resultValue === '.') {
      if (onChange) {
        onChange('');
      } else {
        setNumber('');
      }
    }

    onBlur && onBlur(resultValue);
  };

  return /*#__PURE__*/React.createElement(Input, __assign({
    type: "text",
    value: resultValue,
    onBlur: onNumberBlur,
    onChange: onNumberChange
  }, restProps));
};

NumberInput.defaultProps = {
  numberType: INT,
  enableMinus: false,
  precision: 2
};
export default NumberInput;