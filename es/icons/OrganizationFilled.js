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

function OrganizationFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      "data-name": "\\u56FE\\u5C42 1",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.18 6.55v8H16V16H0v-1.45h1.82v-8H0V5.09h1.91a6.19 6.19 0 0112.18 0H16v1.46zM4.73 7.64v5.81h1.45V7.64zm4.72 0v5.81h1.46V7.64z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

OrganizationFilled.displayName = "OrganizationFilled";
export default OrganizationFilled;