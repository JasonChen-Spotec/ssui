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
function MailFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8a4 4 0 014-4zm7.4 9.55l6.34-4.7a.64.64 0 00.14-.89.62.62 0 00-.88-.13l-6.41 4.67a.85.85 0 01-1.23 0L5 7.83a.62.62 0 00-.87.13.64.64 0 00.13.89l6.3 4.65c.392.372.91.582 1.45.59a2.06 2.06 0 001.39-.54z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
MailFilled.displayName = 'MailFilled';
export default MailFilled;