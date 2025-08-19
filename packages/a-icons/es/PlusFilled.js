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
function PlusFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M20.5 11H15a1 1 0 01-1-1V4.5a1.5 1.5 0 00-3 0V10a1 1 0 01-1 1H4.5a1.5 1.5 0 000 3H10a1 1 0 011 1v5.5a1.5 1.5 0 003 0V15a1 1 0 011-1h5.5a1.5 1.5 0 000-3z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PlusFilled.displayName = 'PlusFilled';
export default PlusFilled;