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

function LagFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M1.2 11.5C.4 10.4 0 9.1 0 7.8 0 3.9 3.6.7 8 .7s8 3.2 8 7.1-3.6 7.1-8 7.1c-1.2 0-2.4-.2-3.5-.7l-3.4 1.1c-.2.1-.5 0-.7-.2s-.2-.4-.2-.7l1-2.9z",
      fill: "inherit"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "lag-filled_svg__st0",
      d: "M11 10.7c0-.2-.1-.4-.1-.4l-.1-.3-1.9-5.1c-.2-.5-.6-.8-1.1-.8s-.8.3-1.1.9l-1.9 5.1-.1.3s-.2.6.5.9h.3c.3 0 .6-.2.7-.5l.3-.9h2.7l.4.9c.1.3.3.5.7.5.3 0 .6-.1.7-.4v-.2zM6.9 8.6l.9-2.9 1 2.9H6.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

LagFilled.displayName = "LagFilled";
export default LagFilled;