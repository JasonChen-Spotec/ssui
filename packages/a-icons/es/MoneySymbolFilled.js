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
import * as React from 'react';
import Icon from 'a-base-icon/lib/icon';
function MoneySymbolFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7zm2.475 4.486a.7.7 0 10-.95 1.028l2.759 2.552H9.227a.7.7 0 100 1.4H11.3v1.217H9.227a.7.7 0 100 1.4H11.3V17a.7.7 0 101.4 0v-1.917h1.957a.7.7 0 100-1.4H12.7v-1.217h1.957a.7.7 0 100-1.4h-1.94l2.758-2.552a.7.7 0 10-.95-1.028L12 9.822 9.475 7.486z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
MoneySymbolFilled.displayName = 'MoneySymbolFilled';
export default MoneySymbolFilled;