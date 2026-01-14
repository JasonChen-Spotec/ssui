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
function Hours24(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 15 15",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 14.667,
      height: 14.667,
      rx: 2.444,
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.334 10.07h-1.25V7.585c0-.442-.32-.533-.48-.533-.16 0-.48.091-.48.533v2.485H9.872V4.643h1.25v1.662c.26-.26.587-.381.9-.381.884 0 1.31.655 1.31 1.486v2.66zM9.204 9.354H8.8v.716H7.61v-.716H5.363v-1.19l1.8-3.52h1.371l-1.799 3.52h.877v-.716H8.8v.717h.404v1.189zM4.824 10.07H1.333V8.942L3.3 6.808c.198-.214.274-.351.274-.58 0-.297-.168-.503-.488-.503-.229 0-.503.107-.503.526h-1.25c0-1.067.808-1.654 1.753-1.654 1.006 0 1.738.618 1.738 1.639 0 .572-.236.877-.67 1.334L2.856 8.942h1.967v1.128z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
Hours24.displayName = 'Hours24';
export default Hours24;