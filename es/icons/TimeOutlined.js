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

function TimeOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      "data-name": "\\u56FE\\u5C42 1",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 1.2a6.81 6.81 0 016.59 5.1A6.88 6.88 0 0114.8 8 6.8 6.8 0 116 1.51a6.56 6.56 0 012-.31M8 0a8.11 8.11 0 00-2.38.36A8 8 0 1016 8a8.24 8.24 0 00-.25-2A8 8 0 008 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 12.75a.6.6 0 01-.6-.6V8a.63.63 0 01.17-.42L9.75 5.3a.61.61 0 01.85 0 .6.6 0 010 .85l-2 2.11v3.91a.6.6 0 01-.6.58z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

TimeOutlined.displayName = "TimeOutlined";
export default TimeOutlined;