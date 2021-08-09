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

function ArrowInsideCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11 8.91v1.57L6.91 8 11 5.56v1.38h4.44s.56.06.56.77v.54a.67.67 0 01-.69.66z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16a8 8 0 115.9-13.45.86.86 0 01-.05 1.23.87.87 0 01-1.24 0 6.27 6.27 0 10-.15 8.66.88.88 0 011.24 1.24A8 8 0 018 16z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

ArrowInsideCircleOutlined.displayName = "ArrowInsideCircleOutlined";
export default ArrowInsideCircleOutlined;