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
function ArrowsChevronOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.586 8l4.707-4.707a1 1 0 011.414 0L12.414 8 11 9.414l-3-3V21H6V6.414l-3 3L1.586 8zM13 14.586l3 3V3h2v14.586l3-3L22.414 16l-4.707 4.707a1 1 0 01-1.414 0L11.586 16 13 14.586z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ArrowsChevronOutlined.displayName = 'ArrowsChevronOutlined';
export default ArrowsChevronOutlined;