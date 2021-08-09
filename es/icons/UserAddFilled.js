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

function UserAddFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M6 7.2c1.5 0 2.8-1.2 2.8-2.7v-.9C8.8 2 7.5.8 6 .8S3.2 2 3.2 3.6v.9C3.2 6 4.5 7.2 6 7.2zm4.6 2.5c-2.9-1.2-6.2-1.2-9.1 0C.5 10.1 0 11 0 12v1.1c0 .7.5 1.4 1.1 1.6 1.6.3 3.3.5 4.9.5 1.6 0 3.3-.2 4.8-.6.7-.2 1.1-.9 1.1-1.6v-1.1c.1-.9-.4-1.8-1.3-2.2zM14 5.2v-2h-1.2v2h-2v1.1h2v2H14v-2h2v-1l-2-.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

UserAddFilled.displayName = "UserAddFilled";
export default UserAddFilled;