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
function RoleSale(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 24,
      height: 24,
      rx: 4,
      fill: "#FF5652"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 4.8a3.605 3.605 0 00-3.6 3.603c0 1.95 1.523 3.528 3.509 3.596a.61.61 0 01.167 0h.053a3.593 3.593 0 003.47-3.596A3.605 3.605 0 0012 4.8zM16.33 14.286c-2.378-1.449-6.256-1.449-8.651 0C6.597 14.948 6 15.843 6 16.8c0 .958.597 1.846 1.67 2.5 1.194.732 2.762 1.098 4.33 1.098s3.136-.366 4.33-1.098c1.073-.662 1.67-1.55 1.67-2.515-.009-.958-.597-1.846-1.67-2.5z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 6.5H5l1 1 1-1zM6 7.5L7 9l-1 1-1-1 1-1.5zM14 13h-4l2 2 2-2z",
      fill: "#FF5652"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 15l2 2.4-2 1.6-2-1.6 2-2.4z",
      fill: "#FF5652"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
RoleSale.displayName = 'RoleSale';
export default RoleSale;