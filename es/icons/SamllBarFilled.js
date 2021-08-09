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

function SamllBarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      y: 5.03,
      width: 4,
      height: 10.97,
      rx: 1.11
    }), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      x: 6,
      width: 4,
      height: 16,
      rx: 1.11
    }), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      x: 12,
      y: 2.64,
      width: 4,
      height: 13.36,
      rx: 1.11
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

SamllBarFilled.displayName = "SamllBarFilled";
export default SamllBarFilled;