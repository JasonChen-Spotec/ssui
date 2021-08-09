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

function PendingFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "inherit",
      className: "pending-filled_svg__cls-1",
      cx: 3.72,
      cy: 8,
      r: 1.06
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "inherit",
      className: "pending-filled_svg__cls-1",
      cx: 8,
      cy: 8,
      r: 1.06
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "inherit",
      className: "pending-filled_svg__cls-1",
      cx: 12.28,
      cy: 8,
      r: 1.06
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

PendingFilled.displayName = "PendingFilled";
export default PendingFilled;