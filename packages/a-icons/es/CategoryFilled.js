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
function CategoryFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M4 2a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zM15 15a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2v-3a2 2 0 00-2-2h-5zM13 4a2 2 0 012-2h5a2 2 0 012 2v7a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zM4 11a2 2 0 00-2 2v7a2 2 0 002 2h5a2 2 0 002-2v-7a2 2 0 00-2-2H4z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
CategoryFilled.displayName = 'CategoryFilled';
export default CategoryFilled;