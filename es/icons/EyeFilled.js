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

function EyeFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 3.2C3.9 3.2 0 8 0 8s3.6 4.8 8 4.8S16 8 16 8c-4.2-5.2-8-4.8-8-4.8zm0 7.9c-1.7 0-3.1-1.4-3.1-3.1S6.3 4.9 8 4.9s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 8,
      cy: 8,
      r: 1.9
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

EyeFilled.displayName = "EyeFilled";
export default EyeFilled;