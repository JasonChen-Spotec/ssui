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

function CheckCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 1.3a6.7 6.7 0 100 13.4A6.7 6.7 0 008 1.3zM8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M6.8 11.6c-.2 0-.3-.1-.5-.2L4.2 9.1c-.3-.3-.3-.7 0-1 .3-.3.7-.3.9 0l1.7 1.8 4.1-4.3c.3-.3.7-.3.9 0 .3.3.3.7 0 1l-4.6 4.8c-.1.1-.2.2-.4.2"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CheckCircleOutlined.displayName = "CheckCircleOutlined";
export default CheckCircleOutlined;