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

import * as React from "react";
import Icon from "assui/lib/Icon";

function UserFilled2(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0h4.4v4.4c0 2.5-2 4.4-4.4 4.4s-4.4-2-4.4-4.4S5.5 0 8 0zM4 9.8h8c1.7 0 3.1 1.4 3.1 3.1v.4c0 1.5-1.2 2.7-2.7 2.7H3.6C2.1 16 .9 14.8.9 13.3v-.4c0-1.7 1.4-3.1 3.1-3.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

UserFilled2.displayName = "UserFilled2";
export default UserFilled2;