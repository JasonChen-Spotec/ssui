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
function ArrowDownFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.42 6c-.403 0-.808.154-1.116.462L12 13.767 4.696 6.462a1.581 1.581 0 00-2.234 0 1.581 1.581 0 000 2.234l8.42 8.42a1.581 1.581 0 002.235 0l8.42-8.42a1.581 1.581 0 000-2.234A1.574 1.574 0 0020.422 6z",
      fill: "currentColor"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
ArrowDownFilled.displayName = 'ArrowDownFilled';
export default ArrowDownFilled;