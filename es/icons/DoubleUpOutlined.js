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

function DoubleUpOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 7.1c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 9.1l-6.6 6.4c-.4.4-.9.4-1.2 0s-.4-.9 0-1.1l7.1-7c.3-.2.5-.3.7-.3z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .2c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 2.2 1.4 8.7c-.3.3-.8.3-1.1 0s-.4-.9 0-1.1l7.1-7c.2-.3.4-.4.6-.4z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

DoubleUpOutlined.displayName = "DoubleUpOutlined";
export default DoubleUpOutlined;