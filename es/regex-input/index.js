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
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import 'antd/lib/input/style';
import parse2RegexOption from './regexOptionConverter';
import * as regexPatterns from './regexPattern';

var RegexInput = function RegexInput(props) {
  var regexes = props.regexes,
      value = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      rest = __rest(props, ["regexes", "value", "defaultValue", "onChange"]);

  var isControlled = value !== undefined;

  var _a = __read(useState(isControlled ? value : defaultValue), 2),
      stateValue = _a[0],
      setStateValue = _a[1];

  var resultValue = isControlled ? value : stateValue;

  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = regexes.reduce(function (cur, acc) {
      var regexOption = parse2RegexOption(acc);

      if (regexOption.isValid) {
        return cur.replace(regexOption.pattern, regexOption.replacement);
      }

      return cur;
    }, originalValue);

    if (resultValue !== nextValue) {
      setStateValue(nextValue);
      onChange && onChange(nextValue);
    }
  };

  return /*#__PURE__*/React.createElement(Input, __assign({
    value: resultValue,
    onChange: handleChange
  }, rest));
};

RegexInput.displayName = 'RegexInput';
RegexInput.propTypes = {
  regexes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
};
RegexInput.patterns = regexPatterns;
export default RegexInput;