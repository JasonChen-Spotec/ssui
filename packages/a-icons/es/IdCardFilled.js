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
function IdCardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 3a4 4 0 00-4 4v10a4 4 0 004 4h14a4 4 0 004-4V7a4 4 0 00-4-4H5zm11.68 9.204a2.5 2.5 0 10-2.36 0A3.501 3.501 0 0012 15.5v1h7v-1a3.501 3.501 0 00-2.32-3.296zM5 9h4.5v2H5V9zm0 4h4.5v2H5v-2z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
IdCardFilled.displayName = 'IdCardFilled';
export default IdCardFilled;