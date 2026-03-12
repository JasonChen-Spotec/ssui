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
function BarLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M3 15h2v6H3v-6zm8-6h2v12h-2V9zm8 3h2v9h-2v-9zm-8.768-9.268a2.5 2.5 0 013.536 0c.454.454.693 1.04.725 1.634l3.714 1.394.025-.028a2.5 2.5 0 11-.726 1.9L13.792 6.24l-.024.028a2.498 2.498 0 01-3 .406L6.431 9.926a2.5 2.5 0 11-1.2-1.6l4.337-3.253a2.496 2.496 0 01.664-2.34zm-5.878 7.414a.5.5 0 10-.708.707.5.5 0 00.708-.707zm16-3a.5.5 0 10-.707.707.5.5 0 00.707-.707zm-8-3a.5.5 0 10-.707.707.5.5 0 00.707-.707z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
BarLineOutlined.displayName = 'BarLineOutlined';
export default BarLineOutlined;