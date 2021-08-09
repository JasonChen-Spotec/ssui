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

function TimeTwoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.92 16A7.92 7.92 0 011.45 3.51a.6.6 0 01.84-.15.61.61 0 01.15.85 6.71 6.71 0 1011.08 7.57.61.61 0 011 .67A7.91 7.91 0 017.92 16z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.05 8.68H7.92a.62.62 0 01-.51-.28L5.25 5a.61.61 0 011-.64l2 3.13h3.79a.61.61 0 010 1.21z"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 15.41,
      cy: 8.08,
      r: 0.59
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 13.98,
      cy: 3.66,
      r: 0.61
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 10.37,
      cy: 0.76,
      r: 0.61
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 5.34,
      cy: 1.12,
      r: 0.61
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

TimeTwoOutlined.displayName = "TimeTwoOutlined";
export default TimeTwoOutlined;