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
function ShareFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M16.238 15.594a2.53 2.53 0 00-2.46-.12l-3-3a2.52 2.52 0 00.14-1.61 2 2 0 00-.08-.22l2.94-2.94a2.48 2.48 0 10-1.06-1l-2.77 2.73a2.5 2.5 0 10-.83 4.46c.234-.068.456-.17.66-.3l3 3a2.49 2.49 0 103.5-1h-.04z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ShareFilled.displayName = 'ShareFilled';
export default ShareFilled;