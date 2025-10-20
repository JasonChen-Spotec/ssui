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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React from 'react';
import { NumberFormatBase } from 'react-number-format';
import classNames from 'classnames';
// TODO  react-number-format 分别封装导出
var NumberFormatInput = function NumberFormatInput(_a) {
  var className = _a.className,
    restProps = __rest(_a, ["className"]);
  return /*#__PURE__*/React.createElement(NumberFormatBase, __assign({}, restProps, {
    className: classNames('rc-number-format-input', className)
  }));
};
export default NumberFormatInput;