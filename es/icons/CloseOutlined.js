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

function CloseOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "close-outlined_svg__st0",
      d: "M.014 15.144L15.146.012l.849.848L.863 15.992z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "close-outlined_svg__st0",
      d: "M15.153 15.986L.02.854.869.005l15.132 15.132z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CloseOutlined.displayName = "CloseOutlined";
export default CloseOutlined;