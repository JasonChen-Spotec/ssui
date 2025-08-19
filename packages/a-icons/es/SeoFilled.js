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
function SeoFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.25 3.563a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 9.188a.75.75 0 01.75-.75h5.625a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 14.813a.75.75 0 01.75-.75h5.625a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2.25 20.438a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.875 11.438a3.938 3.938 0 11-7.875 0 3.938 3.938 0 017.875 0z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.938 8.25a3.188 3.188 0 100 6.375 3.188 3.188 0 000-6.375zm-4.688 3.188a4.688 4.688 0 119.375 0 4.688 4.688 0 01-9.375 0z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.47 17.03l-2.25-2.25 1.06-1.06 2.25 2.25a.75.75 0 01-1.06 1.06z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
SeoFilled.displayName = 'SeoFilled';
export default SeoFilled;