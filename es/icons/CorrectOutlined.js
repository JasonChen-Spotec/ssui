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

function CorrectOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.7 2.8c-.3-.3-.9-.3-1.2 0l-8.7 8.7-4.3-4.4C1.2 6.7.6 6.7.3 7c-.4.3-.4.9 0 1.2l4.7 5c0 .1.1.2.2.2.2.2.4.3.7.2.2 0 .5 0 .7-.2.1 0 .1-.1.2-.2l9-9.2c.3-.2.3-.8-.1-1.2z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CorrectOutlined.displayName = "CorrectOutlined";
export default CorrectOutlined;