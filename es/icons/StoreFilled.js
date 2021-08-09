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

function StoreFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M1 1.9l-1 3c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2l-1-3c-.1-.3-.4-.6-.8-.6H1.8c-.3 0-.6.2-.8.6zm9 5.8c-.7.1-1.5-.2-2-.7-.5.5-1.3.8-2 .7-.7.1-1.5-.2-2-.7-.6.5-1.4.8-2.2.7v5.8c0 .7.7 1.2 1.2 1.2h9.8c.7 0 1.2-.5 1.2-1.2V7.7c-.8 0-1.6-.2-2.2-.8-.3.6-1.1.9-1.8.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

StoreFilled.displayName = "StoreFilled";
export default StoreFilled;