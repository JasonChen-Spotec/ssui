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
function PeopleAddFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm6.25-.75v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5h-2z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14h4.655a7.464 7.464 0 00-1.155 4c0 1.47.423 2.842 1.155 4H2v-3a5 5 0 015-5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleAddFilled.displayName = 'PeopleAddFilled';
export default PeopleAddFilled;