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

function EmailCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.92 4.24H4.08a1 1 0 00-1 1v5.46a1 1 0 001 1h7.84a1 1 0 001-1V5.27a1 1 0 00-1-1.03zm-7.84.56h7.84a.48.48 0 01.47.47v.43L8 9.2 3.61 5.7v-.43a.48.48 0 01.47-.47zm7.84 6.4H4.08a.48.48 0 01-.47-.47V6.42l4.22 3.35a.27.27 0 00.34 0l4.22-3.35v4.31a.48.48 0 01-.47.47z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

EmailCircleOutlined.displayName = "EmailCircleOutlined";
export default EmailCircleOutlined;