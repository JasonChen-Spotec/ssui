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
function ExternalLinkFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M17.34 7.04l-4.24 4.24a.75.75 0 01-1.06-1.06l4.24-4.24a4.39 4.39 0 00-2.44-.77H7.33A4.33 4.33 0 003 9.51v6.48a4.33 4.33 0 004.33 4.33h6.48a4.33 4.33 0 004.33-4.33V9.54a4.33 4.33 0 00-.8-2.5z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.26 3.46a.71.71 0 00-.4-.4.75.75 0 00-.29-.06h-5a.75.75 0 000 1.5h3.19l-1.47 1.47c.41.29.77.65 1.06 1.06l1.47-1.47v3.19a.75.75 0 001.5 0v-5c0-.1-.02-.198-.06-.29z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ExternalLinkFilled.displayName = 'ExternalLinkFilled';
export default ExternalLinkFilled;