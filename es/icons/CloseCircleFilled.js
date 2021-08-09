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

function CloseCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M11.79 12.15a.4.4 0 01-.26-.1L8 8.51l-3.53 3.54a.4.4 0 01-.26.1.37.37 0 01-.25-.1.36.36 0 01-.11-.26.4.4 0 01.1-.26L7.49 8 4 4.47a.37.37 0 01.26-.62.4.4 0 01.26.1L8 7.49 11.53 4a.39.39 0 01.52 0 .37.37 0 010 .52L8.51 8l3.54 3.53a.4.4 0 01.1.26.36.36 0 01-.36.36z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CloseCircleFilled.displayName = "CloseCircleFilled";
export default CloseCircleFilled;