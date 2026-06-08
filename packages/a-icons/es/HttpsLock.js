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
function HttpsLock(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      fill: "#EFB041"
    }), /*#__PURE__*/React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      stroke: "#fff",
      strokeWidth: 1.111
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 7.5v1.75h1.25V15h-8.5V9.25H7V7.5a3 3 0 016 0zm-5 0v1.75h4V7.5a2 2 0 10-4 0zm2 3.625a1 1 0 100 2 1 1 0 000-2z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
HttpsLock.displayName = 'HttpsLock';
export default HttpsLock;