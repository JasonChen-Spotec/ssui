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
function PeopleGroupFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M7 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10.5 4a4 4 0 110-8 4 4 0 010 8zm0 1a4.5 4.5 0 014.5 4.5v.5h-9v-.5a4.5 4.5 0 014.5-4.5zM7 12a5 5 0 015 5v4H2v-4a5 5 0 015-5z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleGroupFilled.displayName = 'PeopleGroupFilled';
export default PeopleGroupFilled;