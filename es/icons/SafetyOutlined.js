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

function SafetyOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16c-1.5 0-3.2-.9-5.2-2.8-1-.9-1.6-2.2-1.7-3.6V3c0-.4.2-.7.6-.9l6-2.1h.6l6 2.1c.3.1.6.5.6.9v5.2c0 .5 0 1-.1 1.4-.1 1.4-.7 2.6-1.7 3.6C11.2 15.1 9.5 16 8 16zM2.3 3.1v5.1c0 .5 0 .9.1 1.3.1 1.1.6 2.1 1.3 2.8C5.4 14 6.9 14.9 8 14.9s2.6-.8 4.4-2.5c.8-.7 1.3-1.7 1.3-2.8 0-.4.1-.9.1-1.3V3.1L8 1.1l-5.7 2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.3 9.1l3.3-3.3c.2-.2.6-.2.8 0s.2.6 0 .8l-3.7 3.7c-.2.2-.6.2-.8 0l-2-2c-.2-.2-.2-.6 0-.8s.6-.2.8 0l1.6 1.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SafetyOutlined.displayName = "SafetyOutlined";
export default SafetyOutlined;