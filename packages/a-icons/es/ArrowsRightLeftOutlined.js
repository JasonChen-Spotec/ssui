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
function ArrowsRightLeftOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 1.586l4.707 4.707a1 1 0 010 1.414L16 12.414 14.586 11l3-3H3V6h14.586l-3-3L16 1.586zM9.414 13l-3 3H21v2H6.414l3 3L8 22.414l-4.707-4.707a1 1 0 010-1.414L8 11.586 9.414 13z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ArrowsRightLeftOutlined.displayName = 'ArrowsRightLeftOutlined';
export default ArrowsRightLeftOutlined;