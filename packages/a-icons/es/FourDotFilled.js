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
function FourDotFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 6.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM17.25 2.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM17.25 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM6.75 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
FourDotFilled.displayName = 'FourDotFilled';
export default FourDotFilled;