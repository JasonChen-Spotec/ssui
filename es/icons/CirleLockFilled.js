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

function CirleLockFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 8.44a.69.69 0 00-.48 1.19v.78a.49.49 0 00.48.49.48.48 0 00.48-.49v-.79a.73.73 0 00.21-.49.7.7 0 00-.69-.69z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0a8 8 0 108 8 8 8 0 00-8-8zm.07 3.63a2.64 2.64 0 012.61 2.45h-1a1.63 1.63 0 00-3.23 0h-1a2.63 2.63 0 012.62-2.45zm3.52 7.65a1.09 1.09 0 01-1.09 1.09h-5a1.09 1.09 0 01-1.09-1.09V7.77a1.09 1.09 0 011.09-1.1h5a1.09 1.09 0 011.09 1.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CirleLockFilled.displayName = "CirleLockFilled";
export default CirleLockFilled;