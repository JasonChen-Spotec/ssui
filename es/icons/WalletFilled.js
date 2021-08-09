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

function WalletFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.37 14.68H1.63A1.63 1.63 0 010 13.05V6.86h16v6.19a1.63 1.63 0 01-1.63 1.63zm-4.25-4.23l-.65 2.28h3.92l.61-2.28zM0 3a1.63 1.63 0 011.63-1.68h12.74A1.63 1.63 0 0116 3v1.58H0z"
    }));
  };

  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}

WalletFilled.displayName = "WalletFilled";
export default WalletFilled;