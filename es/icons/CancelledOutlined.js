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

function CancelledOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.65 15.77L8 9.12l-6.65 6.65a.79.79 0 11-1.12-1.12L6.88 8 .23 1.35A.79.79 0 011.35.23L8 6.88 14.65.23a.79.79 0 111.12 1.12L9.12 8l6.65 6.65a.79.79 0 11-1.12 1.12z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CancelledOutlined.displayName = "CancelledOutlined";
export default CancelledOutlined;