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
function ShapArrowLeftFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 25 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.833 0a6 6 0 00-6 6v12a6 6 0 006 6h12a6 6 0 006-6V6a6 6 0 00-6-6h-12zm8.132 18.913a.768.768 0 00.607.286.8.8 0 00.608-.287c.336-.381.336-1 0-1.382l-4.873-5.528 4.873-5.529c.336-.382.336-1 0-1.382a.802.802 0 00-.607-.291.802.802 0 00-.608.291l-5.482 6.22c-.335.382-.335 1 0 1.382l5.482 6.22z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ShapArrowLeftFilled.displayName = 'ShapArrowLeftFilled';
export default ShapArrowLeftFilled;