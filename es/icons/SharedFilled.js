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

function SharedFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.3 10.7c-.8 0-1.5.3-2 .9l-6.1-3c.1-.4.1-.7 0-1.1l5.4-2.7c.9 1.2 2.5 1.5 3.7.8s1.9-2.2 1.4-3.6-1.9-2.2-3.3-2-2.3 1.5-2.3 3c0 .2 0 .4.1.5L4.7 6.2c-.8-.8-1.9-1.1-3-.7C.7 5.9 0 6.9 0 8s.7 2.1 1.7 2.5c1 .4 2.2.1 2.9-.7l6.1 3c0 .2-.1.4-.1.5 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.6-2.7-2.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SharedFilled.displayName = "SharedFilled";
export default SharedFilled;