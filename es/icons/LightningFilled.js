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

function LightningFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.4 6.1c0-.1-.2-.3-.6-.3h-4l1-4.8c0-.3 0-.5-.2-.7-.1-.2-.3-.3-.5-.3-.3 0-.5.1-.6.1-.1 0-.1.1-.1.1L1.7 8.8c-.2.2-.2.4-.1.7.1.1.3.3.7.3h3.6l-2 5.4v.1c0 .1 0 .3.2.6.1 0 .3.1.5.1.1 0 .3 0 .4-.1.1 0 .1-.1.2-.1l9-8.9.1-.1c.1-.1.3-.4.1-.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

LightningFilled.displayName = "LightningFilled";
export default LightningFilled;