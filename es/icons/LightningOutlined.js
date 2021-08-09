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

function LightningOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M5.87 9.37H2.73a.59.59 0 01-.54-.8L5.31.38A.57.57 0 015.85 0h5.27a.58.58 0 01.54.81L9.85 5.27h3.42a.59.59 0 01.44 1L5.32 15.8a.59.59 0 01-1-.54l1.55-5.89zm.39-8.2l-2.68 7h3.05a.59.59 0 01.59.59.77.77 0 010 .15l-1.14 4.24L12 6.44H9a.59.59 0 01-.55-.81l1.82-4.46z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

LightningOutlined.displayName = "LightningOutlined";
export default LightningOutlined;