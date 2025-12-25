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
function SphereFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M11 1.045C5.394 1.55 1 6.262 1 12c0 6.075 4.925 11 11 11 2.154 0 4.164-.62 5.86-1.69l-6.654-8.702A1 1 0 0111 12V1.045z",
      fill: "currentCOlor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.449 20.094A10.972 10.972 0 0022.955 13h-8.931l5.425 7.094zM22.955 11H13V1.045A11.003 11.003 0 0122.955 11z",
      fill: "currentCOlor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SphereFilled.displayName = 'SphereFilled';
export default SphereFilled;