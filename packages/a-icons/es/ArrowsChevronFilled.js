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
function ArrowsChevronFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M21 13.31a1.49 1.49 0 00-2.12 0l-1.4 1.39V9.23a1.5 1.5 0 00-3 0v5.47l-1.39-1.39a1.5 1.5 0 00-2.12 2.12l4 3.95c.072.069.149.132.23.19l.08.05.17.09h.12l.16.05c.198.04.402.04.6 0l.18-.05h.1l.18-.1h.08l.22-.19 4-3.95a1.51 1.51 0 00-.09-2.16z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.94 10.69c.28.283.662.442 1.06.44a1.45 1.45 0 001.06-.44 1.49 1.49 0 000-2.12l-4-3.95a1.63 1.63 0 00-.49-.33 1.56 1.56 0 00-1.1 0 1.51 1.51 0 00-.47.33l-4 4a1.51 1.51 0 000 2.12 1.49 1.49 0 002.12 0L6.55 9.3v5.47a1.5 1.5 0 003 0V9.3l1.39 1.39z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ArrowsChevronFilled.displayName = 'ArrowsChevronFilled';
export default ArrowsChevronFilled;