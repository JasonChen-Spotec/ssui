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

function CycleArrowFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11.3 11.7c-.9.9-2.1 1.3-3.3 1.3-2.7 0-4.8-2.1-5-4.7h1.2L2.1 5.1 0 8.3h1.3c.2 3.6 3.1 6.5 6.7 6.5 1.7 0 3.3-.6 4.5-1.7.4-.3.4-.9.1-1.2-.3-.5-.9-.5-1.3-.2zM14.8 8c0-3.7-3-6.8-6.8-6.8-1.7 0-3.3.7-4.5 1.8-.4.3-.4.8-.1 1.2.3.4.9.4 1.2.1C5.6 3.4 6.8 3 8 3c2.8 0 5 2.2 5 5h-1.2l2.1 3.2L16 8h-1.2z"
    })));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

CycleArrowFilled.displayName = "CycleArrowFilled";
export default CycleArrowFilled;