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

function DoubleDownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 8.7l-7.1-7C-.1 1.4 0 .9.3.6s.8-.4 1.2 0L8 6.9 14.6.5c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.3.3-.5.3-.7.3-.2 0-.4-.1-.6-.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 15.5l-7.1-7c-.4-.3-.3-.8 0-1.1s.8-.4 1.2 0L8 13.8l6.6-6.4c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.2.2-.4.3-.6.3-.3 0-.5-.1-.7-.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

DoubleDownOutlined.displayName = "DoubleDownOutlined";
export default DoubleDownOutlined;