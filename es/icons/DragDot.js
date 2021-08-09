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

function DragDot(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 8,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 8,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 14.4,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 14.4,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 1.6,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 1.6,
      r: 1.6
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

DragDot.displayName = "DragDot";
export default DragDot;