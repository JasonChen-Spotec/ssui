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
function PeopleConfirmFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM11.655 14H7a5 5 0 00-5 5v3h9.655a7.464 7.464 0 01-1.155-4c0-1.47.423-2.842 1.155-4z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 12.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm3.31 4l-3.53 3.53a.75.75 0 01-1.06 0L14.69 18l1.06-1.06 1.5 1.5 3-3 1.06 1.06z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleConfirmFilled.displayName = 'PeopleConfirmFilled';
export default PeopleConfirmFilled;