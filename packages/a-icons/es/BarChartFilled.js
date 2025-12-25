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
function BarChartFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M7 12v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1zm6.5-6h-3a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1zM21 2h-3a1 1 0 00-1 1v18a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BarChartFilled.displayName = 'BarChartFilled';
export default BarChartFilled;